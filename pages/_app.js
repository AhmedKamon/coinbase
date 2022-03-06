import '../styles/globals.css';
import { Thirdweb3Provider } from '@3rdweb/hooks';
import { ThirdwebProvider } from '@3rdweb/react';

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
