import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions'

const TechSelectOption = ({ getTechs, tech: { techs, loading } }) => {
    useEffect(() => {
        getTechs();
      // eslint-disable-next-line
    }, []);
  return (
    !loading && techs !== null && techs.map(t => <option
      key={t.id} value={`${t.firstname} ${t.lastname}`}>
     {t.firstname} {t.lastname}
     </option>)
  )
}

TechSelectOption.propTypes = {
 getTechs: PropTypes.func.isRequired,
 tech: PropTypes.object.isRequired
}

 const mapStateToprops = state => ({
  tech: state.tech
})

export default connect(mapStateToprops, { getTechs })(TechSelectOption);

/**
 * 
 */
