import React from 'react';


class App extends React.Component {
 
  render(){
    let lang = ['Java', 'DotNet', 'Python'];
    let filtervalue = this.props.selectedvalue;
    let toggleval = this.props.toggleval == 'true';
    let newArray = filtervalue && filtervalue !== "0" ? lang.filter(item => item === filtervalue ) :lang
    return (
   <div class="card">
  <div class="card-header">
    React Application
  </div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
  {
    newArray.map((value,index)=>{
      return <li class="list-group-item" key={index}>{value}</li>
    })
  }
  </ul>
  </div>
  <div class="card-body">
  <div class='row'>
  <div class="col-6">
    <button type="button" id="reactincrementer" class="btn btn-outline-secondary">Increment Counter</button>
    </div>
    <div class="col-6">
    {
      toggleval && 
      <span class="badge badge-info">Called from angular app!!!</span>
    }
            </div>
    </div>
</div>
</div>
    )
}
}

export default App;
