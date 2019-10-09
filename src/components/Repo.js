import React, { Component } from 'react';
import Table from './Table';
export default class Repo extends Component {
  changeStatus=(id)=>
  {
     this.props.changeRepoStatus(id);
  }
  removeRpo=(id)=>
  {
    this.props.removeRepos(id)
  }
  render() {
    const { repositories } = this.props;
    // { console.log(repositories); }
    return (<>
      {
        repositories.map((rep) => {
          return <tr key={Math.random()*1000}>
            <td>{rep.id}</td>
            <td>{rep.title}</td>
            <td>{rep.status.toUpperCase()}</td>
            <td><input type="checkbox" checked={(rep.status!=="Public")?true:false} onChange={this.changeStatus.bind(this,rep.id)}/></td>
            <td>{(rep.status==="Public")?"NO":"YES"}</td>
            <td>{rep.language}</td>
            <td><button onClick={this.removeRpo.bind(this,rep.id)}>X</button></td>
            </tr>;
        })
      }</>)
  }
}
{/* // <tr>
//             <td>{repo.id}</td>
//           </tr> */}
