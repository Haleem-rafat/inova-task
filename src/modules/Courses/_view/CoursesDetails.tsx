import { Button } from '@UI/index';
import coursesServices from '@services/courses.services';
import { CoursesOverView } from '@servicesTypes/courses.types';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

export default function CoursesDetails(): JSX.Element {
  const { id } = useParams();
  const { data: CoursesOverView, isLoading } = useSWR(['Courses-overview', id], () =>
    coursesServices.overView(id).then((data) => data as unknown as CoursesOverView)
  );

  return (
    <div className="pt-[240px]">
      {isLoading ? (
        <div>....loading</div>
      ) : (
        <div className="flex items-center justify-between px-8">
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
    </div>
  );
}
