{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // 원하는 것을 제외한다.
  // 빼고싶은 것을 명시
  type VideoMetadata = Omit<Video, "id" | "title">;

  function getVideo1(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetadata1(id: string): VideoMetadata {
    return {
      url: id,
      data: "eh",
    };
  }
}
