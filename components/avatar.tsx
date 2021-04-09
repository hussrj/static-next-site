type Props = {
  name: string;
  picture: string;
  textSizeMin: string;
  textSizeMax: string;
};

const Avatar = ({ name, picture, textSizeMin, textSizeMax }: Props) => {
  return (
    <div className="flex items-center align-middle">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div
        className={`${textSizeMin} lg:${textSizeMax} lg:tracking-tighter`}
      >
        {name}
      </div>
    </div>
  );
};

export default Avatar;
