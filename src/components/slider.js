import React, {Component} from 'react';

import Slide_1 from '../img/slider-1.png';
import Slide_2 from '../img/slider-2.png';
import Slide_3 from '../img/slider-3.png';
import Slide_4 from '../img/slider-4.png';

class Slider extends Component{

    constructor(props){
        super(props);
        this.state.max = this.state.slides.length;
    };

    state = {
        slides: [
            {eachSlide: `url(${Slide_1})`},
            {eachSlide: `url(${Slide_2})`},
            {eachSlide: `url(${Slide_3})`},
            {eachSlide: `url(${Slide_4})`}
        ],
        autoPlay: false,
        active: 0,
        max: 0
    };

    /**
     * when component randered first,
     * we check if we need run auto change slides
     */
    componentDidMount(){

        this.interval = setInterval( () => {

            this.autoChangeSlides();
        },2000);
    };

    /**
     * before component will unmount we clear the interval
     */
    componentWillUnmount(){

        clearInterval(this.interval);
    };

    /**
     * Check if need auto run slides
     */
    autoChangeSlides = () => {

        let {autoPlay, max, active} = this.state;
        if(autoPlay){

            if(active === max -1 ){

                active = 0;
            }else{
                active++
            };

            this.setState({
                active: active
            })
        }
    };

    toggleAutoPlay = () => {

        this.setState( ({autoPlay}) => {

            return {
                autoPlay: !autoPlay
            }
        })
    };

    nextSlide = () => {

        let {active, max} = this.state;
        (active < max -1) ?
        this.setState({
            active: active + 1
        })
        :
        this.setState({
            active: 0
        });
    };

    pervSlide = () => {

        let {active, max} = this.state;

        (active > 0)?
        this.setState({
            active: active - 1
        })
        :
        this.setState({
            active: max -1
        });

    };

    // הופכת לי את הנקודה להיות הנקודה שנבחרה
    selectedDot = (index, event) => {

        this.setState({
            active: index
        })
    };

    isActive = (index) => {

        const{active} = this.state;
        if(active === index){
            return 'active';
        };
    };

    setSliderStyles = () => {

        // בכמה אני צריך להזיז את הסליידר כל פעם
        const transition =this.state.active * - 100/this.state.slides.length;
        return{
            width: (this.state.slides.length * 100) + '%',
            transform: `translateX(${transition}%)`
        }
    };

    renderSlides = () => {
        const transition = 100/this.state.slides.length + '%';//רוחב של כל סליידר בודד
        const copySlides = [...this.state.slides];

        return copySlides.map( (slide,index) => (

            <div
                key = {index}
                style={{backgroundImage: slide.eachSlide, width: transition}}
                className="each-slide">
            </div>
         ) );

    };

    renderDots = () => {

        const copySlides = [...this.state.slides];
        return copySlides.map( (slide, index) => (

            <li 
                className={this.isActive(index) + ' dots'}
                onClick={this.selectedDot.bind(this,index)}
                key = {index}
                ref='dots' >
                <a>&#9679;</a>
            </li>
        ))
    };

    renderPlayStop = () => {

        const {autoPlay} = this.state.autoPlay;
        let playStop;

        if( autoPlay ){
            playStop = <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                            <path d='M0 0h24v24H0z' fill='none'/>
                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
                        </svg>;
        }else {
            playStop =<svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                            <path d='M0 0h24v24H0z' fill='none'/>
                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
                        </svg>;
        };

        return playStop;
    };

    renderArrows = () => {

        return(
            <div>
                <button 
                    type="button"
                    onClick={this.pervSlide}
                    className="arrows prev">
                    <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                        <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>
                <button 
                    type="button"
                    onClick={this.nextSlide}
                    className="arrows next">
                   <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
                        <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>
            </div>
        )
    };

    render(){
        return(
            <div className="slider">
                <div
                    style = {this.setSliderStyles()}
                    className="wrapper">
                    {this.renderSlides()}
                </div>

                {this.renderArrows()}

                <ul className="dots-container">
                    {this.renderDots()}
                </ul>

                <a  
                    onClick={this.toggleAutoPlay}
                    className="toggle-play">
                    {this.renderPlayStop()}
                </a>
            </div>
        )
    };
};

export default Slider;