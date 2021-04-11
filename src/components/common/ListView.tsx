import React from 'react';

interface Props {
    header?: string;
    player1?: string;
    player2?: string;
    player3?: string;

}

const ListViewComponent:React.FC<Props> = ({header, player1, player2, player3}) => {
 
    return (
        <div className="global-list">
           <ul className="list">
               <li>{header}</li>
               <li>{player1}</li>
               <li>{player2}</li>
               <li style={{borderRadius:"1rem"}}>{player3}</li>
           </ul>
        </div>
    );
};

export default ListViewComponent;
