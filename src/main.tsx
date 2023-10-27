import SuspenseLoader from '@UI/Loaders/SuspenseLoader';
import i18n from '@app/locales/i18n';
import { router } from '@app/router';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';
import store from './store/store';

import './index.css';

document.querySelector('#loader.bigramy-loader')?.remove();

const root = ReactDOM.createRoot(document.getElementById('root')!);

async function main() {
  root.render(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <HelmetProvider>
          <SWRConfig
            value={{
              revalidateIfStale: false,
              revalidateOnMount: true,
              revalidateOnFocus: false,
              revalidateOnReconnect: true,
              errorRetryInterval: 2000,
              dedupingInterval: 3000,
              loadingTimeout: 5000,
              errorRetryCount: 3,
            }}>
            <Suspense fallback={<SuspenseLoader />}>
              <RouterProvider router={router} />
            </Suspense>
          </SWRConfig>
        </HelmetProvider>
      </Provider>
    </I18nextProvider>
  );
}

main();
