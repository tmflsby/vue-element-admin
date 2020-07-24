const jaLocale = {
  route: {
    'Dashboard': 'トップ',
    'Documentation': 'ドキュメント',
    'Guide': 'ガイド',
    'Permission': '権限',
    'Role Permission': '権限ロール',
    'Page Permission': 'ページ権限',
    'Directive Permission': 'ディレクティブ権限',
    'Icons': 'アイコン',
    'Components': 'コンポーネント',
    'Tinymce': 'TinyMCE',
    'Markdown': 'Markdown',
    'JSON Editor': 'JSON Editor',
    'Dnd List': 'Drag-And-Drop',
    'SplitPane': 'パネル',
    'Avatar Upload': 'アバターアップロード',
    'Dropzone': 'Dropzone',
    'Sticky': 'Sticky',
    'Count To': 'Count To',
    'ComponentMixin': 'コンポーネントMixin',
    'Back To Top': 'BackToTop',
    'Drag Dialog': 'Drag Dialog',
    'Drag Select': 'Drag Select',
    'Drag Kanban': 'Drag 看板',
    'Charts': 'チャート',
    'Keyboard Chart': 'Keyboardチャート',
    'Line Chart': 'Lineチャート',
    'Mix Chart': 'Mixチャート',
    'Example': 'Example',
    'Nested Routes': 'Nested Routes',
    'Menu 1': 'メニュー１',
    'Menu 1-1': 'メニュー 1-1',
    'Menu 1-2': 'メニュー 1-2',
    'Menu 1-2-1': 'メニュー 1-2-1',
    'Menu 1-2-2': 'メニュー 1-2-2',
    'Menu 1-3': 'メニュー 1-3',
    'Menu 2': 'メニュー 2',
    'Table': 'Table',
    'Dynamic Table': '可変 Table',
    'Drag Table': 'Drag Table',
    'Inline Edit Table': 'Inline Edit Table',
    'Complex Table': 'Complex Table',
    'Tab': 'Tab',
    'Form': 'フォーム',
    'Create Article': '投稿作成',
    'Edit Article': '投稿編集',
    'Article List': '投稿リスト',
    'Error Pages': 'エラーページ',
    'Page401': '401',
    'Page404': '404',
    'Error Log': 'エラーログ',
    'Excel': 'Excel',
    'Export Excel': '一括エクスポート',
    'Export Selected Excel': '複数選択エクスポート',
    'Merge Header': 'ヘッダーマージ',
    'Upload Excel': 'アップロード',
    'Zip': 'Zip',
    'PDF': 'PDF',
    'Export Zip': 'Export Zip',
    'Theme': 'テーマ変更',
    'Clipboard': 'Clipboard',
    'I18n': '多言語',
    'External Link': '外部リンク',
    'Profile': 'プロフィール'
  },
  navbar: {
    'Dashboard': 'トップ',
    'Github': 'GitHub',
    'LogOut': 'ログアウト',
    'Profile': 'プロフィール',
    'Theme': 'テーマ変更',
    'Size': '画面サイズ',
    'Docs': 'ドキュメント',
  },
  login: {
    'title': 'ユーザログイン',
    'logIn': 'ログイン',
    'username': 'ユーザ名',
    'password': 'パスワード',
    'any': 'password',
    'thirdparty': '外部IDでログイン',
    'thirdpartyTips': 'ローカル環境ではログインできません。実装が必要です。'
  },
  documentation: {
    'documentation': 'ドキュメント',
    'github': 'Github Link'
  },
  permission: {
    'addRole': 'ロール追加',
    'editPermission': 'ロール変更',
    'roles': 'ロール',
    'switchRoles': 'ロール切替',
    'tips': 'v-permissionは使えない時があります。例えば: Element-UI の el-tab、 el-table-column 及び他の dom。v-ifを使う必要があります。',
    'delete': '削除',
    'confirm': '確認',
    'cancel': 'キャンセル'
  },
  guide: {
    'description': 'ガイドは各機能の説明です。',
    'button': 'ガイドを見る'
  },
  components: {
    'documentation': 'ドキュメント',
    'tinymceTips': 'tinymceは管理画面に重要な機能ですが、その同時に落とし穴がありあす。tinymceを使う道のりが大変でした。Tinymceを使う時に各自のプロジェクト状況で判断が必要です。ドキュメントはこちら',
    'dropzoneTips': 'Third partyのパッケージを使わず、独自の実装しています。詳細は @/components/Dropzone',
    'stickyTips': 'ページの指定位置へスクロールした場合、表示されます。',
    'backToTopTips1': 'トップへスクロールが表示されます。',
    'backToTopTips2': 'ボタンのスタイルはカスタマイズできます。例えば、show/hide、height、position。 またはElementのel-tooltipを使って、ツールチップを実装できます。',
    'imageUploadTips': 'mockjsは使えないため、カスタマイズしています。公式の最新バージョンを使ってください。'
  },
  table: {
    'dynamicTips1': '先頭は固定、最後に追加',
    'dynamicTips2': '戦後に追加せず、指定列に追加',
    'dragTips1': 'デフォルト順番',
    'dragTips2': 'Drag後の順番',
    'title': 'タイトル',
    'importance': '重要',
    'type': 'タイプ',
    'remark': '評価',
    'search': '検索',
    'add': '追加',
    'export': 'エクスポート',
    'reviewer': 'レビュアー',
    'id': '番号',
    'date': '日時',
    'author': '作成者',
    'readings': '閲覧数',
    'status': 'ステータス',
    'actions': '操作',
    'edit': '編集',
    'publish': '公開',
    'draft': '下書き',
    'delete': 'キャンセル',
    'cancel': 'キャンセル',
    'confirm': '確認',
    'drag': 'ドラッグします'
  },
  example: {
    'warning': '新規作成と編集画面は keep-alive を使えないです。keep-alive の include はrouteのキャッシュは使えないです。そのため、component name を使ってキャッシュさせるようにします。このようなキャッシュ機能を作りたい場合，localStorageを使う手があります。もしくは keep-alive の includeを使って、全ページキャッシュする方法はあります。'
  },
  errorLog: {
    'tips': '右上のbugアイコンをクリックしてください。',
    'description': '管理画面はspaを使う場合が多い、ユーザ体現向上はできますが、想定外エラーが発生する場合があります。Vueはそのエラーハンドリング機能を提供し、エラーレポートができます。',
    'documentation': 'ドキュメント'
  },
  excel: {
    'export': 'エクスポート',
    'selectedExport': 'エクスポート対象を選択してください。',
    'placeholder': 'ファイル名を入力してください。'
  },
  zip: {
    'export': 'エクスポート',
    'placeholder': 'ファイル名を入力してください。'
  },
  pdf: {
    'tips': 'window.print() を使ってPDFダウンロードしています。',
    'clickDownload': 'クリックしてPDFをダウンロードします'
  },
  theme: {
    'change': 'テーマ切替',
    'documentation': 'ドキュメント',
    'tips': 'Tips: テーマの切り替え方法はnavbarのtheme-pickと異なります、使い方はドキュメントを確認してください。'
  },
  tagsView: {
    'refresh': '更新',
    'close': '閉じる',
    'closeOthers': 'その他閉じる',
    'closeAll': 'すべて閉じる'
  },
  settings: {
    'title': 'システムテーマ',
    'theme': 'テーマ色',
    'tagsView': 'Tags-View 開く',
    'fixedHeader': 'Fixed Header',
    'sidebarLogo': 'Sidebar Logo'
  }
};

export default jaLocale;
