import React from "react";
import {
  PiBookOpenDuotone,
  PiWarningCircleDuotone,
  PiEyesFill,
} from "react-icons/pi";

const ListNotice = ({ type }) => {
  const content = {
    noResult: {
      icon: <PiWarningCircleDuotone size={28} color="#51392F" />,
      message: "검색 결과가 없습니다",
    },
    noFollower: {
      icon: <PiWarningCircleDuotone size={28} color="#51392F" />,
      message: "팔로우하는 친구가 없어요",
    },
    noFollowing: {
      icon: <PiWarningCircleDuotone size={28} color="#51392F" />,
      message: "팔로잉하는 친구가 없어요",
    },
    emptyBook: {
      icon: <PiBookOpenDuotone size={32} color="#51392F" />,
      message: "책장이 비어 있어요",
    },
    socialSearch: {
      icon: <PiEyesFill size={32} color="#51392F" />,
      message: "새로운 소셜 친구를 찾아 보세요",
    },
  };

  const { icon, message } = content[type] || {};
  console.log("******검색결과 타입:", type);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex justify-center">{icon}</div>
      <div className="flex justify-center text-und16 text-undpoint pt-1">
        {message}
      </div>
    </div>
  );
};

export default ListNotice;
