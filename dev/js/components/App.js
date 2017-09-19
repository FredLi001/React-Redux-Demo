import React from 'react';
import UserList from '../container/user-list';
require('../../scss/style.scss');
import UserDetail from'../container/user-detail';

const App = ()=>(
    <div>
        <h2>User List</h2>
        <UserList/>
        <hr/>
        <h2>User Detail</h2>
        <UserDetail/>
    </div>
);

export default App;