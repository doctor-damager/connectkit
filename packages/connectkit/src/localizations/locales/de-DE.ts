import { LocaleProps } from './';

const deDE: LocaleProps =
    {
      connectWallet: 'Wallet verbinden',
      disconnect: 'Trennen',
      connected: 'Verbunden',
      wrongNetwork: 'Falsches Netzwerk',
      switchNetworks: 'Netzwerk wechseln',
      chainNetwork: '{{ CHAIN }} Netzwerk',
      copyToClipboard: 'In Zwischenablage kopieren',
      copyCode: 'Code kopieren',
      moreInformation: 'Weitere Informationen',
      back: 'Zurück',
      close: 'Schließen',
      or: 'oder',
      more: 'Mehr',
      tryAgain: 'Erneut versuchen',
      tryAgainQuestion: 'Erneut versuchen?',
      dontHaveTheApp: 'Haben Sie die App nicht?',
      scanTheQRCode: 'QR-Code scannen',
      useWalletConnectModal: 'WalletConnect-Modal verwenden',
      useModal: 'Modal verwenden',
      installTheExtension: 'Erweiterung installieren',
      getWalletName: '{{ CONNECTORNAME }} erhalten',
      otherWallets: 'Andere Wallets',
      learnMore: 'Mehr erfahren',
      getWallet: 'Wallet besorgen',
      approveInWallet: 'Im Wallet genehmigen',
      confirmInWallet: 'Im Wallet bestätigen',
      awaitingConfirmation: 'Warten auf Bestätigung',
      signIn: 'Anmelden',
      signOut: 'Abmelden',
      signedIn: 'Angemeldet',
      signedOut: 'Abgemeldet',
      walletNotConnected: 'Wallet nicht verbunden',

      warnings_walletSwitchingUnsupported: 'Ihr Wallet unterstützt das Wechseln des Netzwerks in dieser App nicht.',
      warnings_walletSwitchingUnsupportedResolve: 'Versuchen Sie stattdessen, das Netzwerk innerhalb Ihres Wallets zu wechseln.',
      warnings_chainUnsupported: 'Diese App unterstützt das aktuell verbundene Netzwerk nicht.',
      warnings_chainUnsupportedResolve: 'Wechseln Sie das Netzwerk oder trennen Sie die Verbindung, um fortzufahren.',

      onboardingScreen_heading: 'Holen Sie sich ein Wallet',
      onboardingScreen_h1: 'Erkunden Sie Web3',
      onboardingScreen_p: 'Ihr Wallet ist das Tor zu allem rund um Ethereum, der magischen Technologie, die es ermöglicht, Web3 zu erkunden.',
      onboardingScreen_ctaText: 'Wählen Sie Ihr erstes Wallet',
      onboardingScreen_ctaUrl: 'https://ethereum.org/en/wallets/find-wallet/',

      aboutScreen_heading: 'Über Wallets',
      aboutScreen_a_h1: 'Für Ihre digitalen Vermögenswerte',
      aboutScreen_a_p: 'Wallets ermöglichen es Ihnen, digitale Vermögenswerte wie NFTs und andere Ethereum-Token zu senden, zu empfangen, zu speichern und damit zu interagieren.',
      aboutScreen_b_h1: 'Eine bessere Möglichkeit zur Anmeldung',
      aboutScreen_b_p: 'Bei modernen Apps kann Ihr Wallet als einfacher Weg zur Anmeldung verwendet werden, anstatt sich an ein Passwort erinnern zu müssen.',
      aboutScreen_c_h1: 'Erkunden Sie die Welt von Web3',
      aboutScreen_c_p: 'Ihr Wallet ist ein unverzichtbares Werkzeug, das es Ihnen ermöglicht, die sich schnell entwickelnde Welt von Web3 zu erkunden und daran teilzunehmen.',
      aboutScreen_ctaText: 'Mehr erfahren',
      aboutScreen_ctaUrl: 'https://ethereum.org/en/wallets/',

      connectorsScreen_heading: 'Wallet verbinden',
      connectorsScreen_newcomer: 'Ich habe kein Wallet',
      connectorsScreen_h1: 'Was ist ein Wallet?',
      connectorsScreen_p: 'Wallets werden verwendet, um digitale Vermögenswerte zu senden, zu empfangen und zu speichern. Durch die Verbindung eines Wallets können Sie mit Apps interagieren.',

      mobileConnectorsScreen_heading: 'Wallet auswählen',

      scanScreen_heading: 'Mit dem Handy scannen',
      scanScreen_heading_withConnector: 'Mit {{ CONNECTORNAME }} scannen',
      scanScreen_tooltip_walletConnect: 'Öffnen Sie eine [WALLETCONNECTLOGO] WalletConnect-unterstützte Wallet, um den Code zu scannen',
      scanScreen_tooltip_default: 'Öffnen Sie {{ CONNECTORNAME }} auf Ihrem Mobiltelefon, um den Code zu scannen',

      downloadAppScreen_heading: '{{ CONNECTORNAME }} herunterladen',
      downloadAppScreen_iosAndroid: 'Scannen Sie mit der Kamera Ihres Mobiltelefons, um iOS oder Android herunterzuladen.',
      downloadAppScreen_ios: 'Scannen Sie mit der Kamera Ihres Mobiltelefons, um iOS herunterzuladen.',
      downloadAppScreen_android: 'Scannen Sie mit der Kamera Ihres Mobiltelefons, um Android herunterzuladen.',

      injectionScreen_unavailable_h1: 'Nicht unterstützter Browser',
      injectionScreen_unavailable_p: 'Um Ihr {{ CONNECTORSHORTNAME }} Wallet zu verbinden, installieren Sie die Erweiterung in {{ SUGGESTEDEXTENSIONBROWSER }}.',

      injectionScreen_install_h1: '{{ CONNECTORNAME }} installieren',
      injectionScreen_install_p: 'Um Ihr {{ CONNECTORSHORTNAME }} Wallet zu verbinden, installieren Sie die Browser-Erweiterung.',

      injectionScreen_connecting_h1: 'Verbindungsanfrage wird gesendet',
      injectionScreen_connecting_p: 'Öffnen Sie die {{ CONNECTORSHORTNAME }} Browser-Erweiterung, um Ihr Wallet zu verbinden.',
      injectionScreen_connecting_injected_h1: 'Verbindungsanfrage wird gesendet',
      injectionScreen_connecting_injected_p: 'Akzeptieren Sie die Anfrage über Ihr Wallet, um eine Verbindung zu dieser App herzustellen.',

      injectionScreen_connected_h1: 'Bereits verbunden',
      injectionScreen_connected_p: 'Sie können dieses Popup jetzt schließen.',

      injectionScreen_rejected_h1: 'Anfrage abgebrochen',
      injectionScreen_rejected_p: 'Sie haben die Anfrage abgebrochen. Klicken Sie oben, um es erneut zu versuchen.',

      injectionScreen_failed_h1: 'Verbindung fehlgeschlagen',
      injectionScreen_failed_p: 'Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut mit der Verbindung.',

      injectionScreen_notconnected_h1: 'Bei {{ CONNECTORNAME }} anmelden',
      injectionScreen_notconnected_p: 'Um fortzufahren, melden Sie sich bitte in Ihrer {{ CONNECTORNAME }}-Erweiterung an.',

      profileScreen_heading: 'Verbunden',

      switchNetworkScreen_heading: 'Netzwerk wechseln',

      signInWithEthereumScreen_tooltip: 'Sie sind nicht bei dieser App angemeldet.\nMit Ethereum anmelden, um fortzufahren.',

      signInWithEthereumScreen_signedOut_heading: 'Mit Ethereum anmelden',
      signInWithEthereumScreen_signedOut_h1: 'Diese App möchte Sie als den Besitzer dieses Wallets überprüfen.',
      signInWithEthereumScreen_signedOut_p: 'Bitte signieren Sie die Anfrage mit Ihrem Wallet, um fortzufahren.',
      signInWithEthereumScreen_signedOut_button: 'Anmelden',

      signInWithEthereumScreen_signedIn_heading: 'Mit Ethereum angemeldet',
      signInWithEthereumScreen_signedIn_h1: 'Sie haben sich erfolgreich als Besitzer dieses Wallets verifiziert.',
      signInWithEthereumScreen_signedIn_p: 'Das Abmelden erfordert eine erneute Authentifizierung in der Zukunft.',
      signInWithEthereumScreen_signedIn_button: 'Abmelden',
    };

export default deDE;
