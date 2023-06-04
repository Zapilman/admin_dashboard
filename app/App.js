import { CenterContainer } from '_core/components/CenterContainer';
import { Layout } from '_core/components/Layout';
import LoginPage from '_core/pages/LoginPage/LoginPage';
import { Button, Input } from '_ui/src';

import '../_styles/style.scss';

const App = () => {
  return (
    <CenterContainer>
      <Layout>
        <div>some shit</div>
        <Button />
        <Input />
        <LoginPage />
      </Layout>
    </CenterContainer>
  );
};
export default App;
