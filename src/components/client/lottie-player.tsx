
'use client';
import Lottie from 'lottie-react';
import type { LottieProps } from 'lottie-react';

interface LottiePlayerProps {
  path: string; // URL to the Lottie JSON
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  // Allow any other valid Lottie props
  [key: string]: any;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({
  path,
  className,
  loop = true,
  autoplay = true,
  ...rest
}) => {
  if (!path) {
    return <div className={className}>Lottie animation path not provided.</div>;
  }

  return (
    <div className={className}>
      <Lottie path={path} loop={loop} autoplay={autoplay} {...rest} />
    </div>
  );
};

export default LottiePlayer;
