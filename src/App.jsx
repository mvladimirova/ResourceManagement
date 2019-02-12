import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import ToolbarView from './components/Toolbar';

import Resources from './components/Resources';

class App extends Component{
   render(){
      return(
         <div>
            <div>
               <CssBaseline/>
               <AppBar position="absolute">
                  <ToolbarView></ToolbarView>
               </AppBar>
            </div>
            <div>
               <main>
                  <Resources></Resources>
               </main>
            </div>
         </div>
      );
   }
}
export default App;