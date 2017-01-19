import React from 'react';
import { Link } from 'react-router';
import { Spinner, Toggle, Choice } from 'belle';
import FontAwesome from 'react-fontawesome';
import { PieChart, Pie, Sector, Cell } from 'recharts';

class UserRating extends React.Component {
  constructor(props){
    super(props);
    this.props.fetchUserProfile();
  }

  componentDidMount(){
  }

  redirect(route){
    this.props.router.replace(route);
  }

  render(){
    const data =
      [{name: 'Five Star', value: this.props.userProfile.five_stars},
       {name: 'Four Star', value: this.props.userProfile.four_stars},
       {name: 'Three Star', value: this.props.userProfile.three_stars},
       {name: 'Two Star', value: this.props.userProfile.two_stars},
       {name: 'One Star', value: this.props.userProfile.one_stars}];
    const COLORS = ['#0088FE', '#00C49F', '#FF8042', '#FFBB28', '#FF0000'];

    const RADIAN = Math.PI / 180;
    return (
      <div className="main">
        <div className="aside">
          <button className="back-button" onClick={this.props.router.goBack}>Go Back</button><br/>
          <div className="pie-total">{this.props.userProfile.total_count} Reviews<br/>{this.props.userProfile.average_rating} Average</div>
          <PieChart width={500} height={500} onMouseEnter={this.onPieEnter}>
            <Pie
              data={data}
              cx={250}
              cy={250}
              innerRadius={120}
              outerRadius={160}
              fill="#8884d8"
              paddingAngle={5} >
            	{
              	data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
          </PieChart>
        </div>
        <div className="aside">
          <h1 className="rating-title">Hello {this.props.userProfile.username}!</h1>
          <br/><br/><br/>
          <h1 className="rating-title">These are your stats:</h1>
          <table className="rating-table">
            <tbody>
              <tr>
                <td><b className="listing-sub-header">Your Average Rating:</b></td>
                <td>
                  <div className="rating-total">{this.props.userProfile.average_rating}</div>
                </td>
              </tr>
              <tr>
                <td><b className="listing-sub-header">Number of Five Star Ratings:</b></td>
                <td>
                  <div className="blue color">{this.props.userProfile.five_stars}</div>
                </td>
              </tr>
              <tr>
                <td><b className="listing-sub-header">Number of Four Star Ratings:</b></td>
                <td>
                  <div className="green color">{this.props.userProfile.four_stars}</div>
                </td>
              </tr>
              <tr>
                <td><b className="listing-sub-header">Number of Three Star Ratings:</b></td>
                <td>
                  <div className="orange color">{this.props.userProfile.three_stars}</div>
                </td>
              </tr>
              <tr>
                <td><b className="listing-sub-header">Number of Two Star Ratings:</b></td>
                <td>
                  <div className="yellow color">{this.props.userProfile.two_stars}</div>
                </td>
              </tr>
              <tr>
                <td><b className="listing-sub-header">Number of One Star Ratings:</b></td>
                <td>
                  <div className="red color">{this.props.userProfile.one_stars}</div>
                </td>
              </tr>
              <tr>
                <td><b className="listing-sub-header">Your Total Review Count:</b></td>
                <td>
                  <div className="rating-total">{this.props.userProfile.total_count}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserRating;
