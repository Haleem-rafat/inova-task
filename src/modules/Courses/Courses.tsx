import Coursescard from '@UI/Cards/Coursescard';
import coursesServices from '@services/courses.services';
import { IcoursesList } from '@servicesTypes/courses.types';
import { useState } from 'react';
import useSWR from 'swr';
import classNames from 'classnames';
import CoursesScelaton from './_Componets/CoursesScelaton';

export default function Courses(): JSX.Element {
  const [productType, setSubProductType] = useState('all');

  const { data: CoursesLis, isLoading } = useSWR(['Courses-list', productType], () =>
    coursesServices.coursesList(productType).then((data) => data as IcoursesList)
  );

  // values filter
  // all = all
  // flexiblity traing = 6
  // weight training = 5
  // cardio training = 4
  // courses = 2
  // fitness Mindset = 7

  const filterValues = [
    { lable: 'All', value: 'All' },
    { lable: 'Flexiblity traing', value: '6' },
    { lable: 'Weight training ', value: '5' },
    { lable: 'Cardio training', value: '4' },
    { lable: 'Courses', value: '2' },
    { lable: 'Fitness mindset', value: '7' },
  ];

  return (
    <div className="pt-[230px]">
      <h1 className="text-white">Courses</h1>
      <div>
        {/* filter */}
        <div className={classNames('flex items-center justify-between px-8 py-4 text-white')}>
          {filterValues.map((f) => (
            <button
              onClick={() => setSubProductType(f?.value)}
              className={classNames({ 'bg-main px-10 py-2': productType === f.value })}
              key={f.value}
              type="button">
              {f.lable}
            </button>
          ))}
        </div>
        <div className="flex gap-10 ">
          {/* card */}
          {isLoading ? (
            <CoursesScelaton />
          ) : CoursesLis?.data.length === 0 ? (
            <div>oops, no data</div>
          ) : (
            CoursesLis?.data?.map((e) => (
              <Coursescard
                id={e.id}
                key={e.id}
                image_url={e?.attributes?.course?.image_url}
                name={e?.attributes.name}
                currency={e?.attributes.currency}
                display_price={e?.attributes.display_price}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
