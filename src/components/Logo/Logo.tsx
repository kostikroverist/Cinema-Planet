const Logo = () => {
  return (
    <div className="border border-gray-200 p-2 rounded-md shadow-lg shadow-orange-300">
      <div className="flex items-end gap-1">
        <span className="text-4xl font-semibold dark:text-white">Cin</span>
        <svg
          className="animate-bounce"
          fill="#F97316"
          width="30px"
          height="30px"
          viewBox="0 0 381.5 381.5"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
        >
          <path
            d="M357.107,171.502c-2.854-2.374-6.611-3.359-10.264-2.687l-43.303,7.977v-27.225c0-6.904-5.596-12.5-12.5-12.5h-7.586
              c15.98-14.406,26.047-35.254,26.047-58.413C309.502,35.284,274.219,0,230.85,0c-27.734,0-52.146,14.443-66.153,36.19
              C150.688,14.443,126.279,0,98.544,0c-43.37,0-78.654,35.284-78.654,78.654c0,23.159,10.066,44.006,26.047,58.413h-7.586
              c-6.903,0-12.5,5.596-12.5,12.5v149.449c0,6.904,5.597,12.5,12.5,12.5h97.5l-48.645,48.646c-4.882,4.882-4.882,12.796,0,17.678
              c4.883,4.882,12.797,4.881,17.678,0l59.813-59.813l59.812,59.813c2.441,2.441,5.641,3.661,8.84,3.661
              c3.197,0,6.398-1.221,8.84-3.661c4.881-4.881,4.881-12.796,0-17.678l-48.646-48.646h97.5c6.902,0,12.5-5.596,12.5-12.5v-27.225
              l43.301,7.979c0.754,0.139,1.512,0.207,2.266,0.207c2.898,0,5.734-1.01,7.998-2.895c2.854-2.375,4.502-5.895,4.502-9.605v-86.37
              C361.609,177.397,359.959,173.877,357.107,171.502z M230.851,25.001c29.585,0,53.653,24.069,53.653,53.654
              c0,29.584-24.068,53.653-53.653,53.653s-53.653-24.068-53.653-53.653C177.196,49.07,201.266,25.001,230.851,25.001z
              M164.696,121.118c3.801,5.9,8.354,11.269,13.547,15.95H151.15C156.343,132.387,160.896,127.018,164.696,121.118z M44.891,78.655
              c0-29.585,24.069-53.654,53.654-53.654c29.584,0,53.652,24.069,53.652,53.654c0,29.584-24.068,53.653-53.652,53.653
              C68.959,132.308,44.891,108.24,44.891,78.655z M278.543,286.518H50.852v-124.45h227.691V286.518z M336.609,252.464l-33.066-6.092
              v-44.158l33.066-6.092V252.464z"
          />
        </svg>
        <span className="text-4xl font-semibold dark:text-white">ma</span>
        <span className="text-4xl font-semibold text-orange-500">Planet</span>
      </div>
    </div>
  );
};

export default Logo;
