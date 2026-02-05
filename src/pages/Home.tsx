import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Panel from '../components/Panel';
import { getAssetPath } from '../utils/paths';

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
      imageUrl: getAssetPath('/About Us Images/About Us Background Image.JPG'),
      path: '/about'
    },
    {
      letter: 'A',
      label: 'EVENTS',
      imageUrl: getAssetPath('/IMAGES/DSC_1595.jpg'),
      path: '/events'
    },
    {
      letter: 'C',
      label: 'CONTACT',
      imageUrl: getAssetPath('/IMAGES/images/DSC_1653-Enhanced-NR.jpg'),
      path: '/contact'
    },
    {
      letter: 'A',
      label: 'MEMBER LOGIN',
      imageUrl: getAssetPath('/IMAGES/attached_assets/SloMo.mp4'),
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
    <div className="relative w-screen flex flex-col lg:flex-row lg:h-[100dvh] lg:overflow-hidden">
      <Header />
      <div className="flex flex-1 flex-col lg:flex-row min-h-screen lg:min-h-0 lg:h-full">
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
    </div>
  );
}

export default Home;
