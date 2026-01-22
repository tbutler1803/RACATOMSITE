import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Panel from '../components/Panel';

interface PanelData {
  letter: string;
  label: string;
  imageUrl: string;
  path: string;
}

function Home() {
  const navigate = useNavigate();

  const panels: PanelData[] = [
    {
      letter: 'R',
      label: 'ABOUT US',
      imageUrl: '/IMAGES/images/DSC_1410.jpg',
      path: '/about'
    },
    {
      letter: 'A',
      label: 'EVENTS',
      imageUrl: '/IMAGES/images/DSC_1629.jpg',
      path: '/events'
    },
    {
      letter: 'C',
      label: 'CONTACT',
      imageUrl: '/IMAGES/images/DSC_1653-Enhanced-NR.jpg',
      path: '/contact'
    },
    {
      letter: 'A',
      label: 'MEMBER LOGIN',
      imageUrl: '/IMAGES/attached_assets/SloMo.mp4',
      path: 'http://raca.k8.membershiphouse.com/login'
    }
  ];

  const handlePanelClick = (path: string) => {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col lg:flex-row">
      <Header />
      {panels.map((panel, index) => (
        <Panel
          key={`${panel.letter}-${index}`}
          letter={panel.letter}
          label={panel.label}
          imageUrl={panel.imageUrl}
          onClick={() => handlePanelClick(panel.path)}
        />
      ))}
    </div>
  );
}

export default Home;
