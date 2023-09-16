
function Reset({winState, setCell, setTurn, setState,setCount}){

    function handleClick(){
        setCell(["","","","","","","","",""]);
        setTurn("O");
        setState(0);
        setCount(0);
    }

    return (<div className="reset" onClick={handleClick}> {winState !== 0 ? (<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_110_12)">
    <path d="M1.60606 4.69697V10.697H7.60606" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23.6061 20.697V14.697H17.6061" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.0961 9.69697C20.5889 8.26375 19.7269 6.98237 18.5906 5.97239C17.4543 4.9624 16.0806 4.25673 14.5978 3.92123C13.1149 3.58572 11.5713 3.63131 10.1109 4.05374C8.65043 4.47618 7.3208 5.26168 6.24606 6.33697L1.60606 10.697M23.6061 14.697L18.9661 19.057C17.8913 20.1323 16.5617 20.9178 15.1012 21.3402C13.6408 21.7626 12.0972 21.8082 10.6143 21.4727C9.13152 21.1372 7.75786 20.4315 6.62152 19.4216C5.48519 18.4116 4.62322 17.1302 4.11606 15.697" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_110_12">
    <rect width="24" height="24" fill="white" transform="translate(0.606056 0.69697)"/>
    </clipPath>
    </defs>
    </svg>
    
    
    ) :null} </div>)
}

export default Reset;
