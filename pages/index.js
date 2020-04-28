import Fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import Prices from '../components/Prices';
const Index = (props) => (
  <Layout>
      <div>
        <h1>Welcome to BitzPrice</h1>
        <p>Check current Bitcoin rate</p>
        <Prices bpi={props.bpi}></Prices>
      </div>
  </Layout>
);
Index.getInitialProps = async function (){
  const res  = await fetch
  ('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  console.log('ddd')
  console.log(data)
  return {
    bpi : data.bpi
  }
}
export default Index;