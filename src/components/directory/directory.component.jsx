import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

//components
import MenuItem from '../menu-item/menu-item.component.jsx'

//selectors
import {selectDirectorySections} from '../../redux/directory/directory.selectors.js'

//styles
import './directory.styles.scss'

const Directory = ({sections}) => (
    
        
            <div className="directory-menu">
                {
                    sections.map(({ id, ...otherSectionsProps }) => (
                        <MenuItem key = { id } { ...otherSectionsProps } />
                    ))
                }
            </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);