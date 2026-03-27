import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const projects = [
    {
      title: "Unity 3D 跑酷射擊遊戲",
      description: "一款快節奏的 3D 跑酷與射擊遊戲。核心特色包含管理敵人與子彈的物件池（Object Pooling）系統，以及動態追蹤畫面的敵人血條 UI。",
      imageUrl: "/runshot.jpg",
      imagePlaceholder: "（遊戲截圖 / 實機遊玩影片）",
      tags: ["Unity 3D", "C#"],
      link: "https://youtube.com/shorts/vGhyM7XAUfk?feature=share"
    },
    {
      title: "Unity 2D 平台跳躍遊戲",
      description: "一款 2D 平台跳躍遊戲。實現核心玩法包含蒐集金幣、闖關、躲避陷阱、擊敗敵人。可擴充多個關卡",
      imageUrl: "/2Dplat.jpg",
      imagePlaceholder: "（遊戲截圖 / 實機遊玩影片）",
      tags: ["Unity", "C#"],
      link: "https://bobycm.itch.io/square-bro"
    },
    {
      title: "《符文魔法大師》遊戲企劃書",
      description: "個人構想遊戲企劃，一款結合 BlockBlast 消除邏輯與Roguelike戰鬥的益智RPG。企劃書內容包含：設計支柱、專案規模、核心循環與系統流程、完整的世界觀設定、美術與視覺設定、動態音效規劃",
      imageUrl: "/GDDtitle.jpg",
      imagePlaceholder: "（遊戲企劃書封面）",
      tags: ["遊戲企劃書"],
      link: "https://rustic-licorice-359.notion.site/2e0f164444728070bfdad0a1fade4c90?pvs=143"
    }
  ];

  return (
    <section id="portfolio" className="container">
      <h2 className="section-title">作品集</h2>
      <div className="grid-layout">
        {projects.map((proj, idx) => (
          <PortfolioItem key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
