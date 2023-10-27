import { IoCodeWorkingSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface IErrorComponent {
  error?: 'not-found' | 'server-error' | 'auth-error' | 'soon';
}
const ErrorComponent: React.FC<IErrorComponent> = ({ error }) => {
  const navigate = useNavigate();

  let errorText: JSX.Element;

  switch (error) {
    case 'not-found':
      errorText = (
        <>
          <span className="text-info px-3 font-medium">404</span>
          <span className="px-3">This page doesn&apos;t exist!</span>
        </>
      );
      break;

    case 'auth-error':
      errorText = <div>You aren&apos;t authorized to see this</div>;
      break;

    case 'server-error':
      errorText = <div>Looks like our API is down</div>;
      break;

    case 'soon':
      errorText = (
        <>
          <span className="text-info flex items-center px-3 font-medium">
            <IoCodeWorkingSharp className="animate-pulse" />
          </span>
          <span className="px-3">Coming soon ...</span>
        </>
      );
      break;

    default:
      errorText = (
        <>
          <span className="text-warning px-3 font-medium">⚠️</span>
          <span className="px-3">Something went wrong</span>
        </>
      );
  }

  return (
    <div className={'my-16 flex h-full w-full flex-col items-center justify-center gap-6'}>
      <div className="flex flex-row gap-1 divide-x-2 text-3xl">{errorText}</div>
      <div className="flex w-fit flex-row gap-3">
        {error !== 'soon' && (
          <button type="button" onClick={() => navigate(-1)}>
            Go back
          </button>
        )}
        <button type="button" onClick={() => navigate('/')}>
          Go home
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;
