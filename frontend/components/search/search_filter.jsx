import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class SearchFilter extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="search_filter">
        <table>
          <th>
            <td>A</td>
            <td>B</td>
            <td>C</td>
          </th>
        </table>
      </div>
    );
  }
}

export default SearchFilter;
