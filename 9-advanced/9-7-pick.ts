{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // 기존의 타입 중 내가 원하는 타입만 골라서 제한적인 타입을 만들때 사용
  type VideoMetadata = Pick<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
