import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
  <div key={alert.id} className={`alert alert-${alert.alertType}`}>
    { alert.message }
  </div>
));

Alert.propTypes = {
  alert: PropTypes.array.isRequired
}

const mapStateToMaps = state => ({
  alerts: state.alert
});

export default connect(mapStateToMaps)(Alert);
