import { Button } from '@UI/index';
import coursesServices from '@services/courses.services';
import { CoursesOverView } from '@servicesTypes/courses.types';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { CgSandClock } from 'react-icons/cg';
import { BsRocketTakeoff } from 'react-icons/bs';
import useSWR from 'swr';
import { CollapseRow } from '@UI/CollapseRow/CollapseRow';

export default function CoursesDetails(): JSX.Element {
  const { id } = useParams();
  const { data: CoursesOverView, isLoading } = useSWR(['Courses-overview', id], () =>
    coursesServices.overView(id).then((data) => data as unknown as CoursesOverView)
  );

  return (
    <div className=" pt-[240px]">
      {isLoading ? (
        <div>....loading</div>
      ) : (
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
          <h1 className="text-white">{CoursesOverView?.data?.attributes?.name}</h1>
          <div>
            <div className="text-lg text-white ">
              {CoursesOverView?.data?.attributes?.currency}
              <span className="text-3xl">{CoursesOverView?.data?.attributes?.display_price}</span>
            </div>
            <div className="flex gap-3 py-3">
              <Button>Pay</Button>
              <AiOutlineShoppingCart size={40} className="border border-main p-1 text-main" />
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-7xl">
        <video
          muted
          autoPlay
          controls
          className="h-[635px] w-full bg-gray-500 "
          src={CoursesOverView?.data?.attributes?.course?.video_url}
        />
        <div className="pt-20 text-white">
          {/* LEVEL */}
          <div>
            <h1 className="font-bold italic">LEVEL</h1>
            <p className="py-4 text-xl text-gray-600">
              {CoursesOverView?.data?.attributes?.course?.level?.value || 'ops, no data'}
            </p>
          </div>
          {/* description */}
          <div>
            <h1 className="font-bold italic">description</h1>
            <p className="py-4 text-xl text-gray-600">
              {CoursesOverView?.data?.attributes?.course?.description || 'ops, no data'}
            </p>
          </div>
        </div>
      </div>
      {/* duration and START DATE */}
      <div className="flex w-full gap-5 bg-navGray p-10 text-white">
        <div className="flex gap-3 border p-5">
          <div className="flex ">
            <CgSandClock size={30} className=" text-main" />
          </div>
          <div>
            <p className="italic">DURATION</p>3 sessions (
            {CoursesOverView?.data?.attributes?.course?.duration_in_hours} hours)
          </div>
        </div>
        <div className="flex gap-3 border p-5">
          <div className="flex ">
            <BsRocketTakeoff size={30} className=" text-main" />
          </div>
          <div>
            <p className="italic">START DATE</p>{' '}
            {CoursesOverView?.data?.attributes?.course?.end_date}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl text-white">
        {CoursesOverView?.data?.attributes.course.sections.map((e, index) => (
          <div className="w flex items-center" key={e.course_id}>
            <h4 className="w-40">Week {index + 1}</h4>
            <CollapseRow
              Title={e.course_name}
              dataRow={
                <div>
                  {e.sessions.map((e) => (
                    <div key={e.section_id} className="text-white">
                      {e.title}
                    </div>
                  ))}
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
