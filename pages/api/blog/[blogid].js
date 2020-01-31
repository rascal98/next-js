const getPosts = () => {
  return [
    {
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      slug: "yarisma",
      date: "5 Aralık 2019"
    },
    {
      title: "Örnek yazı",
      slug: "ornek-yazi",
      date: "3 Aralık 2019"
    },
    {
      title: "Merhaba dünya!",
      slug: "merhaba",
      date: "1 Aralık 2019"
    }
  ];
};

const posts = getPosts();

export default async (req, res) => {
  res.json({ posts });
};