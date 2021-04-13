import React from 'react';

interface Props {
    header?: string;
    label1?: string;
    label2?: string;
    label3?: string;

}

const ListViewComponent:React.FC<Props> = ({header, label1, label2, label3}) => {
 
    return (
        <div className="global-list">
           <ul className="list">
               <li>{header}</li>
               <li>{label1}</li>
               <li>{label2}</li>
               <li style={{borderRadius:"1rem"}}>{label3}</li>
           </ul>
        </div>
    );
};

export default ListViewComponent;
