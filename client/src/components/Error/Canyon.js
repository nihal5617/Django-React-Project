import Cactus from './Cactus'

const Canyon = () => {
    const [p1, p2, p3, p4, p5, p6, p7] = useMouseParallax(-240, -150, -80, -20, 80, 150, 300);
    return (
        <svg viewBox='0 0 2000 720' className='bg-gray-700' preserveAspectRatio='xMidYMid slice'>
            <path style={{transform: `translate(${p3.x}px,${p3.y}px)`}} strokeWidth={5} d="m1831 198l-8 565l-95 3v-576.3zm-441-42v633.1h-257v-622.1zm-340 36v597.3h-201.7v-596.3zm-246 20v531.7h-53v-534.7zm-136-20v575.1h-153.4v-576.3zm-348 3v574.7h-159v-566.8z"/>
            <path style={{transform: `translate(${p3.x}px,${p3.y}px)`}} className='fill-gray-900' d="m-203.5 227v-467.6h2433.1v553.6l-399.6-71l-102 29l-335-76l-258 80l-85-30l-202 32l-45-35l-50 19l-84-35l-154 61l-194-58l-160 58z"/>
            <g style={{transform: `translate(${p1.x}px,${p1.y}px)`, opacity: 0.2}}>
                <Cactus x={0} y={-350} scale={0.1}/>
                <Cactus x={300} y={-320} scale={0.1}/>
                <Cactus x={520} y={-360} scale={0.08}/>
                <Cactus x={800} y={-330} scale={0.1}/>
                <Cactus x={1000} y={-380} scale={0.08}/>
                <Cactus x={1150} y={-350} scale={0.1}/>
                <Cactus x={1400} y={-360} scale={0.1}/>
            </g>
            <g style={{transform: `translate(${p2.x}px,${p2.y}px)`, opacity: 0.4}}>
                <Cactus x={80} y={-300} scale={0.15}/>
                <Cactus x={380} y={-280} scale={0.15}/>
                <Cactus x={600} y={-310} scale={0.1}/>
                <Cactus x={700} y={-290} scale={0.15}/>
                <Cactus x={1100} y={-320} scale={0.1}/>
                <Cactus x={1250} y={-300} scale={0.15}/>
                <Cactus x={1500} y={-310} scale={0.15}/>
            </g>
            <g style={{transform: `translate(${p3.x}px,${p3.y}px)`, opacity: 0.7}}>
                <Cactus x={-110} y={-200} scale={0.2}/>
                <Cactus x={180} y={-180} scale={0.25}/>
                <Cactus x={800} y={-190} scale={0.2}/>
                <Cactus x={500} y={-230} scale={0.15}/>
                <Cactus x={1300} y={-220} scale={0.15}/>
                <Cactus x={1450} y={-200} scale={0.2}/>
            </g>
            <path style={{transform: `translate(${p3.x}px,${p3.y}px)`, filter: 'blur(80px)'}} d='m-300,400 H2400 V700 H0 z'/>
            <text style={{transform: `translate(${p4.x}px,${p4.y}px)`}} x='1000' y='550' textAnchor='middle'>404</text>
            <path style={{transform: `translate(${p5.x}px,${p5.y}px)`}} d="m2195 396v531.1h-2437.2v-538.1l359.2 60l96-22l63 44l169-40l83 39l348-47l147 28l125-32l75 47l75-21l221 28l263-75l109 31z"/>
            <g style={{transform: `translate(${p5.x}px,${p5.y}px)`}}>
                <Cactus x={0} y={80} scale={0.4}/>
                <Cactus x={1000} y={100} scale={0.45}/>
                <Cactus x={1450} y={80} scale={0.4}/>
            </g>
        <g style={{transform: `translate(${p6.x}px,${p6.y}px)`, filter: 'blur(5px) brightness(0.7)'}}>
                <Cactus x={100} y={180} scale={0.5}/>
                <Cactus x={700} y={200} scale={0.55}/>
                <Cactus x={1350} y={250} scale={0.5}/>
            </g>
        <g style={{transform: `translate(${p7.x}px,${p7.y}px)`, filter: 'blur(10px) brightness(0.5)'}}>
                <Cactus x={0} y={320} scale={0.6}/>
                <Cactus x={400} y={280} scale={0.65}/>
                <Cactus x={1400} y={350} scale={0.6}/>
            </g>
        </svg>
    );
}