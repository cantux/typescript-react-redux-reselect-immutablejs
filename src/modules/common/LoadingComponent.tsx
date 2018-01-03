import * as React from 'react';

interface LoadingComponentProps {
}

export const LoadingComponent: React.SFC<LoadingComponentProps> = (props: LoadingComponentProps) => {
    const svgStyle = {
        background: 'none'
    };
    return (
        <div>
            <svg
                className="lds-spinner"
                width="100px"
                height="100px"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                style={svgStyle}
            >
                <g transform="rotate(0 50 50)">
                    <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#220b09">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="3s"
                            begin="-2.75s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(30 50 50)">
                    <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#220b09">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="3s"
                            begin="-2.5s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(60 50 50)">
                    <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#220b09">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="3s"
                            begin="-2.25s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(90 50 50)">
                    <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#220b09">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="3s"
                            begin="-2s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(120 50 50)">
                    <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#220b09">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="3s"
                            begin="-1.75s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(150 50 50)">
                    <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#220b09">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="3s"
                            begin="-1.5s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(180 50 50)">
                    <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#220b09">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="3s"
                            begin="-1.25s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(210 50 50)">
                    <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#220b09">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="3s"
                            begin="-1s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(240 50 50)">
                    <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#220b09">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="3s"
                            begin="-0.75s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(270 50 50)">
                    <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#220b09">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="3s"
                            begin="-0.5s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(300 50 50)">
                    <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#220b09">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="3s"
                            begin="-0.25s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(330 50 50)">
                    <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#220b09">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="3s"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
            </svg>
        </div>
    );
};
