import {useEffect, useLayoutEffect, useRef, useState} from "react";

function Section(props) {

    const [clickedClass, setClickedClass] = useState('notClicked');
    const [hoveredLongClass, setHoveredLong] = useState('notHoveredLong');
    const [hoverCounter, setHoverCounter] = useState(0);

    const [intervalval, setIntervalval] = useState();
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });
    const targetRef = useRef();

    const onClickHandler = () => {
        if(!props.disabled) {
            props.onClickHandler();
            setClickedClass('clicked');
            window.location.href = props.address;
        }
    }

    const onMouseInHandler = () => {
        if(!props.disabled) {
            let interval = setInterval(() => {
                setHoverCounter((hoverCounter) => hoverCounter + 1);
            }, 1000);
            setIntervalval(interval);
        }
    }

    const onMouseOutHandler = () => {
        if(!props.disabled) {
            clearInterval(intervalval);
            setHoverCounter(0);
            setHoveredLong('notHoveredLong');
        }
    }

    useEffect(() => {
        if(hoverCounter>0)
            setHoveredLong('hoveredLong');
    }, [hoverCounter]);

    useEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);

    return (
            <div className={`section-container ${clickedClass}`} onClick={onClickHandler} onMouseOver={onMouseInHandler} onMouseOut={onMouseOutHandler}>
                <div className="section" style={{backgroundImage: `url(${props.background})`, backgroundPosition: props.backgroundPosition}} ref={targetRef}>
                    <div className="overlay" style={{background: props.overlayColor}}></div>
                    <span className="title"> {props.title}</span>
                    <div className="desc">
                        <img src={props.logo}/>
                        <hr/>
                        <span style={{color: props.descriptionColor}}>{props.description}
                            {props.disabled && <b><br/><br/>W PRZYGOTOWANIU</b>}
                        </span>
                    </div>
                </div>
            </div>
    );
}

export default Section;