import { ApiDataDiv } from "./components/ApiDataDiv";
import { ApiFormDiv } from "./components/ApiFormDiv";
import ApiDataProvider from "./providers/ApiDataProvider";

function App() {

  const styles = {
    appDiv: {textAlign: 'center'},
    header: {marginTop: '3vh'},
    primaryDiv: {
      width: '100vw', height: '90vh',
      display: 'flex', flexDirection: 'row',
      borderTop: '1px solid black'
    },
    formDiv: {
      flex: 3, borderRight: '1px solid black',
      display: 'flex', flexDirection: 'column',
      padding: '0 10px'
    },
    dataDiv: {flex: 5, padding: '0 10px'},
  }

  return (
    <div style={styles.appDiv}>
      <h1 style={styles.header}> Stocks Data</h1>
        <div style={styles.primaryDiv}>
          <ApiDataProvider>
            <ApiFormDiv style={styles.formDiv}/>
            <ApiDataDiv style={styles.dataDiv}/>
          </ApiDataProvider>
      </div>
    </div>
  );
}

export default App;
