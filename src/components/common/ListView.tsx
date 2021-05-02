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
               <p>{header}</p>
               <hr/>
               <li ><hr style={{marginTop:"8rem"}}/>{label1}</li>
               <li ><hr style={{marginTop:"8rem"}}/>{label2}</li>
                {label3}
           </ul>
        </div>
    );
};

export default ListViewComponent;
