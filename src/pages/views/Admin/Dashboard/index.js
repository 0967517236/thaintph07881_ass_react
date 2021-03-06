import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = ({ products, category }) => {
  return (
    <section className="wrapper">
      {/* //market*/}
      <div className="market-updates">
        <div className="col-md-3 market-update-gd">
          <div className="market-update-block clr-block-2">
            <div className="col-md-4 market-update-right">
              <i className="fa fa-eye"> </i>
            </div>
            <div className="col-md-8 market-update-left">
              <h4>Tổng sản phẩm</h4>
              <h3>{products.length}</h3>

            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="col-md-3 market-update-gd">
          <div className="market-update-block clr-block-1">
            <div className="col-md-4 market-update-right">
              <i className="fa fa-users" />
            </div>
            <div className="col-md-8 market-update-left">
              <h4>Tổng danh mục</h4>
              <h3>{category.length}</h3>
              
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
       
  
        <div className="clearfix"> </div>
      </div>
      {/* //market*/}
      <div className="row">
        <div className="panel-body">
          <div className="col-md-12 w3ls-graph">
            {/*agileinfo-grap*/}
            <div className="agileinfo-grap">
              <div className="agileits-box">
                <header className="agileits-box-header clearfix">
                  <h3>Visitor Statistics</h3>
                  <div className="toolbar">
                  </div>
                </header>
                <div className="agileits-box-body clearfix">
                  <div id="hero-area" />
                </div>
              </div>
            </div>
            {/*//agileinfo-grap*/}
          </div>
        </div>
      </div>
      <div className="agil-info-calendar">
        {/* calendar */}
        <div className="col-md-6 agile-calendar">
          <div className="calendar-widget">
            <div className="panel-heading ui-sortable-handle">
              <span className="panel-icon">
                <i className="fa fa-calendar-o" />
              </span>
              <span className="panel-title"> Calendar Widget</span>
            </div>
            {/* grids */}
            <div className="agile-calendar-grid">
              <div className="page">
                <div className="w3l-calendar-left">
                  <div className="calendar-heading">
                  </div>
                  <div className="monthly" id="mycalendar" />
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </div>
        {/* //calendar */}
        <div className="col-md-6 w3agile-notifications">
          <div className="notifications">
            {/*notification start*/}
            <header className="panel-heading">
              Notification
              </header>
            <div className="notify-w3ls">
              <div className="alert alert-info clearfix">
                <span className="alert-icon"><i className="fa fa-envelope-o" /></span>
                <div className="notification-info">
                  <ul className="clearfix notification-meta">
                    <li className="pull-left notification-sender"><span><a href="#">Jonathan Smith</a></span> send you a mail </li>
                    <li className="pull-right notification-time">1 min ago</li>
                  </ul>
                  <p>
                    Urgent meeting for next proposal
                    </p>
                </div>
              </div>
              <div className="alert alert-danger">
                <span className="alert-icon"><i className="fa fa-facebook" /></span>
                <div className="notification-info">
                  <ul className="clearfix notification-meta">
                    <li className="pull-left notification-sender"><span><a href="#">Jonathan Smith</a></span> mentioned you in a post </li>
                    <li className="pull-right notification-time">7 Hours Ago</li>
                  </ul>
                  <p>
                    Very cool photo jack
                    </p>
                </div>
              </div>
              <div className="alert alert-success ">
                <span className="alert-icon"><i className="fa fa-comments-o" /></span>
                <div className="notification-info">
                  <ul className="clearfix notification-meta">
                    <li className="pull-left notification-sender">You have 5 message unread</li>
                    <li className="pull-right notification-time">1 min ago</li>
                  </ul>
                  <p>
                    <a href="#">Anjelina Mewlo, Jack Flip</a> and <a href="#">3 others</a>
                  </p>
                </div>
              </div>
              <div className="alert alert-warning ">
                <span className="alert-icon"><i className="fa fa-bell-o" /></span>
                <div className="notification-info">
                  <ul className="clearfix notification-meta">
                    <li className="pull-left notification-sender">Domain Renew Deadline 7 days ahead</li>
                    <li className="pull-right notification-time">5 Days Ago</li>
                  </ul>
                  <p>
                    Next 5 July Thursday is the last day
                    </p>
                </div>
              </div>
              <div className="alert alert-info clearfix">
                <span className="alert-icon"><i className="fa fa-envelope-o" /></span>
                <div className="notification-info">
                  <ul className="clearfix notification-meta">
                    <li className="pull-left notification-sender"><span><a href="#">Jonathan Smith</a></span> send you a mail </li>
                    <li className="pull-right notification-time">1 min ago</li>
                  </ul>
                  <p>
                    Urgent meeting for next proposal
                    </p>
                </div>
              </div>
            </div>
            {/*notification end*/}
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      {/* tasks */}
      <div className="agile-last-grids">
        <div className="col-md-4 agile-last-left">
          <div className="agile-last-grid">
            <div className="area-grids-heading">
              <h3>Monthly</h3>
            </div>
            <div id="graph7" />
          </div>
        </div>
        <div className="col-md-4 agile-last-left agile-last-middle">
          <div className="agile-last-grid">
            <div className="area-grids-heading">
              <h3>Daily</h3>
            </div>
            <div id="graph8" />
          </div>
        </div>
        <div className="col-md-4 agile-last-left agile-last-right">
          <div className="agile-last-grid">
            <div className="area-grids-heading">
              <h3>Yearly</h3>
            </div>
            <div id="graph9" />
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      {/* //tasks */}
      <div className="agileits-w3layouts-stats">
        <div className="col-md-4 stats-info widget">
          <div className="stats-info-agileits">
            <div className="stats-title">
              <h4 className="title">Browser Stats</h4>
            </div>
            <div className="stats-body">
              <ul className="list-unstyled">
                <li>GoogleChrome <span className="pull-right">85%</span>
                  <div className="progress progress-striped active progress-right">
                    <div className="bar green" style={{ width: '85%' }} />
                  </div>
                </li>
                <li>Firefox <span className="pull-right">35%</span>
                  <div className="progress progress-striped active progress-right">
                    <div className="bar yellow" style={{ width: '35%' }} />
                  </div>
                </li>
                <li>Internet Explorer <span className="pull-right">78%</span>
                  <div className="progress progress-striped active progress-right">
                    <div className="bar red" style={{ width: '78%' }} />
                  </div>
                </li>
                <li>Safari <span className="pull-right">50%</span>
                  <div className="progress progress-striped active progress-right">
                    <div className="bar blue" style={{ width: '50%' }} />
                  </div>
                </li>
                <li>Opera <span className="pull-right">80%</span>
                  <div className="progress progress-striped active progress-right">
                    <div className="bar light-blue" style={{ width: '80%' }} />
                  </div>
                </li>
                <li className="last">Others <span className="pull-right">60%</span>
                  <div className="progress progress-striped active progress-right">
                    <div className="bar orange" style={{ width: '60%' }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-8 stats-info stats-last widget-shadow">
          <div className="stats-last-agile">
            <table className="table stats-table ">
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>PRODUCT</th>
                  <th>STATUS</th>
                  <th>PROGRESS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Lorem ipsum</td>
                  <td><span className="label label-success">In progress</span></td>
                  <td><h5>85% <i className="fa fa-level-up" /></h5></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Aliquam</td>
                  <td><span className="label label-warning">New</span></td>
                  <td><h5>35% <i className="fa fa-level-up" /></h5></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Lorem ipsum</td>
                  <td><span className="label label-danger">Overdue</span></td>
                  <td><h5 className="down">40% <i className="fa fa-level-down" /></h5></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Aliquam</td>
                  <td><span className="label label-info">Out of stock</span></td>
                  <td><h5>100% <i className="fa fa-level-up" /></h5></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Lorem ipsum</td>
                  <td><span className="label label-success">In progress</span></td>
                  <td><h5 className="down">10% <i className="fa fa-level-down" /></h5></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Aliquam</td>
                  <td><span className="label label-warning">New</span></td>
                  <td><h5>38% <i className="fa fa-level-up" /></h5></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </section>
  )
}

Dashboard.propTypes = {

}

export default Dashboard
