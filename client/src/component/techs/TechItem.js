import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTechs } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { id, firstname, lastname}, deleteTechs }) => {
  const onDelete = () => {
    deleteTechs(id);
    M.toast({ html: 'Technician Deleted'})
  }
  return (
    <li className='collection-item'>
       <div>
           {firstname} {lastname}
           <a href='#!' className='secondary-content'
            onClick={onDelete}>
           <i className='material-icons grey-text'> delete</i>
           </a> 
       </div>
    </li>
  );
  
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTechs: PropTypes.func.isRequired
};

export default connect(null, { deleteTechs })(TechItem);
