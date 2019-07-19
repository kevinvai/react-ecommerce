import React from 'react'
import MenuItem from '../menu-item/MenuItem'
import './Directory.scss'

class Directory extends React.Component{
    constructor(){
        super();
        this.state ={
            sections: [{
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 5
            }, {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 4
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 3
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 2,
                size: 'large'
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 1,
                size: 'large'
            }
        ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>)
                    )
                }
            </div>
        )
    }


}

export default Directory;
