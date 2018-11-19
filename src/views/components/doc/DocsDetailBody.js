import React, { Component } from 'react'
import PropTypes from 'prop-types'


class DocsDetailBody extends Component {
  
  render(){
   const { archivo } = this.props;
    return(
      <div className="DocsDetailBody">
        <div>
          { archivo }
        </div>
      </div>
    )
  }
}

DocsDetailBody.propTypes = {
  archivo: PropTypes.string.isRequired
}

export default DocsDetailBody;
