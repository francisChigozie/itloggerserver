import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTechs } from '../../actions/techActions';

const AddTechModal = ({ addTechs }) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const onSubmit = () => {
    if(firstname === '' || lastname === '') {
      M.toast({ html: 'Please enter firstname and lastname'})
    }else{
      addTechs({
        firstname,
        lastname
      });

      M.toast({ html: `${firstname} ${lastname} was Added as a new Technician`});

       // Clear Fields
       setFirstname('');
       setLastname('');
    }
    
  };

  return (
    <div id='add-tech-modal' className='modal'>
       <div className='modal-content'>
         <h4>New Technician</h4>
           <div className='row'>
              <div className='input-field'>
                 <input type='text' name='firstname'
                    value={firstname} 
                    onChange={e => setFirstname(e.target.value)}
                    />
                    <label htmlFor='firstname' className='active'>
                      First Name
                    </label>
              </div>
           </div>
         
           <div className='row'>
              <div className='input-field'>
                 <input type='text' name='lastname'
                    value={lastname} 
                    onChange={e => setLastname(e.target.value)}
                    />
                    <label htmlFor='lastname' className='active'>
                      Last Name
                    </label>
              </div>
           </div>
          
       </div>
       <div className='modal-footer'>
         <a href='#!' onClick={onSubmit} 
            className='modal-class waves-effect blue waves-light btn'>
              Enter
            </a>
       </div>
    </div>
  )
 
};

AddTechModal.propTypes = {
  addTechs: PropTypes.func.isRequired
}

export default connect(null, { addTechs })(AddTechModal);

/**style={modalStyle}
 * const modalStyle = {
  width: '75%',
  height: '75%'
}
 */
