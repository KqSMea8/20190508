;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-news" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M239.04 452.48l33.792 0 0 23.744 0.64 0.64c5.44-8.96 12.48-16 21.248-21.12 8.768-5.12 18.432-7.68 29.056-7.68 17.728 0 31.68 4.608 41.92 13.76s15.296 22.912 15.296 41.28l0 110.976L345.344 614.08 345.344 512.448C344.896 499.776 342.208 490.56 337.216 484.8c-4.992-5.696-12.8-8.576-23.424-8.576-6.016 0-11.456 1.088-16.256 3.264S288.64 484.736 285.312 488.576c-3.328 3.84-5.952 8.384-7.808 13.568C275.584 507.392 274.688 512.896 274.688 518.72l0 95.36L239.04 614.08 239.04 452.48z"  ></path>'+
      ''+
      '<path d="M446.336 542.528c0 6.272 0.896 12.288 2.624 18.112C450.752 566.464 453.376 571.584 456.96 575.936s8 7.872 13.44 10.496c5.44 2.624 11.904 3.904 19.392 3.904 10.432 0 18.816-2.24 25.152-6.72 6.336-4.48 11.072-11.2 14.208-20.16l33.792 0C561.088 572.224 557.824 580.032 553.216 586.88 548.672 593.792 543.104 599.552 536.704 604.224 530.24 608.96 522.944 612.48 514.944 614.912 506.944 617.28 498.496 618.496 489.792 618.496c-12.736 0-24-2.112-33.792-6.272C446.208 608.064 437.952 602.24 431.168 594.688s-11.904-16.448-15.296-26.88c-3.456-10.432-5.12-21.888-5.12-34.368 0-11.456 1.792-22.336 5.44-32.704 3.648-10.304 8.832-19.392 15.616-27.2C438.528 465.728 446.72 459.52 456.32 454.976c9.6-4.608 20.416-6.848 32.512-6.848 12.736 0 24.128 2.624 34.24 8 10.112 5.312 18.496 12.352 25.152 21.12 6.656 8.768 11.52 18.816 14.528 30.208 3.008 11.328 3.776 23.104 2.368 35.2L446.336 542.656zM529.472 519.04C529.088 513.408 527.872 508.032 525.888 502.784 523.904 497.6 521.216 493.056 517.76 489.216c-3.456-3.84-7.616-6.976-12.48-9.408C500.352 477.44 494.848 476.224 488.832 476.224c-6.272 0-11.968 1.088-17.024 3.264S462.336 484.736 458.688 488.576C455.04 492.416 452.096 496.96 449.92 502.144 447.744 507.392 446.528 513.024 446.336 519.04L529.472 519.04z"  ></path>'+
      ''+
      '<path d="M577.6 452.48l37.824 0 31.552 120.704 0.64 0 30.336-120.704 35.968 0 29.056 120.704 0.64 0 32.832-120.704 36.288 0-50.624 161.664-36.608 0-30.016-120.064-0.64 0-29.696 120.064L627.648 614.144 577.6 452.48z"  ></path>'+
      ''+
      '<path d="M515.904 925.12c-79.68 0-159.808-22.976-230.208-69.952l-128.384 41.344L141.312 896.512l-14.848-15.104c-14.848-19.712-7.424-45.632 1.152-75.648 2.24-7.808 5.568-19.648 5.824-23.424 1.216-17.28 16-30.336 33.024-30.72 17.28 0.64 30.976 13.888 30.976 31.104 0 10.624-3.264 22.912-7.296 36.992l105.92-35.52 13.312 9.6c140.736 101.888 331.968 86.656 454.656-36.096 66.496-66.496 103.104-154.944 103.104-248.96 0-94.016-36.608-182.4-103.104-248.896S609.28 156.736 515.264 156.736c-94.016 0-182.4 36.608-248.896 103.104C165.632 360.576 135.68 510.848 190.08 642.816c6.72 16.32-1.088 35.072-17.408 41.728-16.32 6.976-35.008-0.96-41.792-17.344-64.192-155.904-28.8-333.568 90.24-452.608 78.592-78.592 183.04-121.856 294.144-121.856s215.552 43.264 294.144 121.856 121.856 183.04 121.856 294.144-43.328 215.616-121.856 294.208C728.576 883.776 622.656 925.12 515.904 925.12z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-best" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M291.456 949.44c-11.712 0-20.736-3.968-27.392-8.768-14.336-10.368-28.288-32.384-13.504-78.336l51.008-158.72c10.176-31.616-4.352-76.672-31.04-96.448L136.96 504C94.592 472.704 99.008 438.144 102.848 426.368 106.688 414.784 121.216 384 173.248 384L336.64 384c35.008 0 71.488-20.736 81.28-50.88L468.48 181.376C483.2 136.064 507.328 128 524.928 128c0.064 0 0.128 0 0.192 0 17.792 0 42.112 9.984 57.472 56L659.2 417.28c5.504 16.768-3.648 34.944-20.416 40.448C622.016 463.296 603.904 454.144 598.4 437.312L525.44 215.104 478.784 353.024C460.48 409.28 399.36 448 336.64 448L178.944 448 309.12 552.32c48.32 35.712 72 111.168 53.376 168.96l-47.104 147.456 121.984-88.384c49.28-35.84 126.464-35.776 175.68-0.128l122.048 88.192-47.104-146.24c-18.816-58.24 4.8-136.064 53.76-172.352L871.488 448l-111.04 0c-17.664 0-32-14.336-32-32s14.336-32 32-32l116.8 0c52.032 0 66.56 30.784 70.4 42.368 3.904 11.776 8.256 44.416-34.56 76.16L780.16 603.968c-26.624 19.712-41.408 66.688-31.232 98.176l50.816 158.016c14.848 46.016 0.832 68.224-13.504 78.656-14.336 10.432-39.616 16.96-78.656-11.264l-131.968-95.232c-26.816-19.392-73.792-19.328-100.544 0.256l-132.352 96.384C321.856 944.192 304.896 949.44 291.456 949.44z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zjd" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M483.885174 667.085124c50.935066-38.98592 101.647051-77.80197 152.467507-116.701932 21.289885 14.399965 42.580794 28.803 63.958684 43.261293 11.816117-12.599969 23.566742-25.1324 35.510772-37.869492 0.955768 2.745531 1.860371 5.257747 2.705622 7.789407 5.590322 16.742313 9.987468 33.80185 12.723789 51.231825 1.718131 10.94119 2.916423 21.979594 4.02978 33.004695 1.260713 12.492522 1.490957 25.053606 1.035586 37.589107-0.38374 10.619872-1.113357 21.240767-2.146896 31.813566-2.009773 20.589944-6.138814 40.791032-11.964496 60.641125-8.175193 27.852348-19.692504 54.212716-35.367509 78.688153-14.909571 23.280216-32.855292 43.829228-54.973032 60.569494-19.287275 14.600533-40.49325 25.249057-64.101947 30.91101-14.912641 3.576455-30.033014 4.953825-45.327348 3.979638-33.172517-2.111081-62.668295-14.074553-89.208764-33.722032-22.99062-17.023722-41.519626-38.169321-56.83545-62.206784-17.758456-27.873838-30.130228-58.055231-38.306444-90.016153-3.543709-13.852496-6.330172-27.863604-7.967462-42.061978-1.184989-10.273994-2.071172-20.602224-2.577708-30.933523-0.462534-9.4093-0.582261-18.865673-0.220011-28.278043 0.410346-10.659781 1.524726-21.291932 2.339278-31.934317 0.057305-0.737804 0.292666-1.482771 0.234337-2.209318-0.151449-1.886977 0.901533-2.584871 2.49789-3.217275 21.463848-8.527211 42.905182-17.110703 64.338331-25.715685 1.042749-0.418532 1.670036-0.329505 2.490727 0.491187 21.132296 21.185508 42.298362 42.338271 63.453171 63.503313C483.066529 666.087401 483.40729 666.534586 483.885174 667.085124z"  ></path>'+
      ''+
      '<path d="M702.090894 550.08541c-5.436826-2.950192-10.857279-5.888104-16.276708-8.830109-16.029068-8.699126-32.064276-17.388019-48.071855-26.127054-1.061169-0.579191-1.736551-0.50756-2.691295 0.208754-49.288566 37.005822-98.596576 73.980945-147.906631 110.959138-0.401136 0.301875-0.816598 0.581238-1.276063 0.907673-4.230348-4.624321-8.398274-9.178033-12.565177-13.733792-15.456017-16.905018-30.92022-33.79878-46.337351-50.737568-0.935302-1.025353-1.61887-1.203408-2.910283-0.650823-21.791305 9.309016-43.608194 18.562774-65.419965 27.824719-0.38067 0.162706-0.772596 0.297782-1.407046 0.539282 0.87595-3.344165 1.669012-6.511297 2.536776-9.660011 8.023744-29.060873 19.597337-56.586786 35.663244-82.155115 15.086603-24.007787 33.351596-45.188178 56.010665-62.396095 19.839861-15.066137 41.701774-25.934672 66.081021-31.488155 14.165628-3.226484 28.503171-4.418636 43.007513-3.562129 36.108383 2.131547 67.590398 15.895015 95.605452 38.21844 21.866007 17.423835 39.495526 38.57762 53.893444 62.440098 4.692882 7.776104 8.752338 15.934924 13.104459 23.919782 0.355087 0.647753 0.523933 1.167592-0.107447 1.847068-6.810103 7.306406-13.58132 14.650675-20.366863 21.980617C702.503287 549.755905 702.316022 549.889959 702.090894 550.08541z"  ></path>'+
      ''+
      '<path d="M317.276598 255.191076c13.935384 13.921058 27.54331 27.514657 41.428551 41.383526-1.104147 1.223874-2.557242 2.978844-4.161786 4.584412-52.612265 52.635801-105.292068 105.202017-157.806095 157.934009-8.389064 8.42181-17.972327 12.518105-29.650297 10.1952-19.676132-3.91517-29.476335-27.14115-18.778692-44.209898 1.814322-2.895957 4.212952-5.493108 6.642281-7.925507 52.384068-52.454676 104.809067-104.868419 157.24123-157.277046C313.997925 258.072707 315.947324 256.411881 317.276598 255.191076z"  ></path>'+
      ''+
      '<path d="M461.066469 234.097666c-19.570731 19.637246-39.892569 40.027645-59.481719 59.683311-26.795273-26.836205-54.003961-54.089919-80.375585-80.502475 19.199271-19.163455 39.686884-39.613206 59.573817-59.461253C406.558018 179.591261 433.783079 206.815299 461.066469 234.097666z"  ></path>'+
      ''+
      '<path d="M378.902144 109.494787c-34.168194 34.111912-68.541049 68.430532-103.428627 103.259782-5.851265-6.02318-12.516058-12.402471-18.62315-19.278065-11.55415-13.002129-11.620665-31.422663 0.48607-43.925419 19.436678-20.071128 39.20593-39.838334 59.292408-59.259662 12.252045-11.845793 30.223349-12.117992 43.193755-0.864694C366.745267 95.430466 372.545366 102.725616 378.902144 109.494787z"  ></path>'+
      ''+
      '<path d="M400.791687 337.900823c34.923394-34.914184 69.125357-69.104891 104.242156-104.21248 7.143701 7.629771 15.326057 14.954597 21.7647 23.580045 8.982582 12.034081 7.636934 28.77844-2.979868 39.736003-19.639293 20.274766-39.548738 40.309054-59.918671 59.842946-12.58769 12.07399-30.80561 11.597129-43.87937-0.183172C413.399843 350.700337 407.23954 344.223832 400.791687 337.900823z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ggk" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M879.158 196.113 147.444 196.113c-43.11 0-78.278 35.109-78.278 78.22L69.166 745.67c0 43.105 35.168 78.166 78.278 78.166l731.714 0c43.11 0 78.221-35.061 78.221-78.166L957.379 274.333C957.379 231.222 922.269 196.113 879.158 196.113L879.158 196.113 879.158 196.113zM895.315 347.572 273.188 347.572c0.054 0.397 0.113 0.9 0.113 1.345l0 73.695c0.728-0.954 1.843-1.677 3.353-2.072 2.405-0.61 4.697-1.281 7.043-2.014l1.509-0.498c1.51-0.444 3.021-0.954 4.477-1.397 0.954-0.787 2.18-1.232 3.636-1.344l0.723 0c5.817-1.676 11.745-2.903 18.064-2.453 1.226 0.054 2.288 0.498 3.182 1.06 9.168-6.602 22.588-8.279 33.047-9.676 13.641-1.79 28.288-2.908 41.878 0 4.976 1.118 5.532 6.207 3.24 9.452 4.14 0.669 8.279 1.729 12.243 3.293 0.504-0.777 1.173-1.505 2.243-2.067 10.562-6.089 23.758-1.172 33.209 4.922 9.672 6.265 20.018 14.989 23.538 26.391 0.674 1.956 0.279 3.632-0.562 4.922 4.926 9.5 7.55 20.296 8.332 31.591l422.859 0 0 262.955c0 8.833-7.267 16.157-16.157 16.157L147.444 761.834c-8.948 0-16.216-7.324-16.216-16.157L131.228 482.72l0.558 0L131.786 347.572l-0.558 0 0-73.24c0-8.889 7.268-16.157 16.216-16.157l731.714 0c8.891 0 16.157 7.214 16.157 16.157L895.315 347.572 895.315 347.572 895.315 347.572zM176.738 389.843c10.401-5.64 18.9 0 25.386 9.618 0 0 67.654 108.805 68.436 110.095 3.356 5.366 13.083 3.743 16.891 1.73 5.136-2.795 8.043-11.407 1.392-22.139l-11.798-17.448c-7.042-9.5-0.112-17.501 10.009-24.045 1.398-0.948 2.743-1.73 4.14-2.453 8.553-4.643 16.544-5.591 22.644 2.628l13.419 19.677c4.863 4.921 8.216 5.425 10.455 4.193 3.577-1.955 4.359-8.445 4.359-8.445l-3.802-9.95c-3.299-8.387-0.445-13.474 6.374-17.164 2.072-1.061 4.364-2.014 7.046-2.909 11.631-3.968 24.491-5.087 28.629 5.816l3.015 7.776-0.057 0c0 0 4.979 23.981 10.458 20.965 0.728-0.336 1.452-1.231 2.18-2.682l0 0 1.902-8.387c0.224-4.98 2.233-8.001 5.482-9.731 4.302-2.404 10.675-2.57 17.723-2.292 12.355 0.392 14.871 11.739 21.528 34.216l29.406 132.899 27.006 44.955L388.42 716.541l-28.683-45.854c0 0-28.287 0.675-66.813-21.076l-95.776-16.211c-12.189-2.074-20.238-12.974-18.059-24.378 1.227-6.316 5.366-11.46 10.85-14.539 4.415-2.292 9.727-3.301 15.152-2.406l55.123 6.321c4.032 0.555 7.047 0.391 9.06-0.782 7.83-4.247-0.169-22.256-26.225-64.521L170.59 418.253c-6.597-9.79-4.975-21.866 5.479-28.014C176.29 390.126 176.52 389.96 176.738 389.843M162.145 366.086c-0.556 0.273-1.118 0.558-1.621 0.835-11.681 6.935-19.848 17.614-22.922 30.247-3.02 12.468 2.405 23.543 9.501 34.445l72.355 114.558c4.692 7.664 6.989 15.102 10.122 20.461l-19.911-1.618c-11.793-1.84-23.987 0.228-34.329 5.818-13.196 7.212-22.311 19.349-24.987 33.437-5.035 26.334 13.64 51.436 41.654 56.186l90.683 15.327c24.323 12.912 45.235 18.337 59.321 20.683l20.243 32.49 14.76 23.483 25.159-13.587 110.541-59.832 25.104-13.584-14.202-23.708-23.986-39.862-28.459-128.934L471 472.203l-0.22-0.724-1.226-3.973c-3.363-11.348-5.988-20.351-10.513-28.126-10.737-18.557-27.848-21.802-37.017-22.134-6.763-0.226-13.698-0.172-20.575 1.28-10.512-12.912-30.193-21.186-59.771-11.123-4.418 1.456-8.215 3.132-11.684 4.979-3.241 1.784-6.207 3.743-8.778 5.924-11.686-5.596-27.12-6.545-44.728 3.02-1.954 1.114-8.894 4.916-10.962 6.314-3.015 1.96-5.756 3.973-8.215 6.036-13.924-22.3-26.895-43.213-29.861-48.027l-0.279-0.387-0.279-0.336C212.08 362.67 186.304 353.002 162.145 366.086L162.145 366.086 162.145 366.086 162.145 366.086 162.145 366.086zM162.145 366.086"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jfcx" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M510.117117 249.305019c-92.932576 0-168.269401 75.338872-168.269401 168.269401s75.336826 168.269401 168.269401 168.269401c92.930529 0 168.267355-75.338872 168.267355-168.269401S603.048669 249.305019 510.117117 249.305019zM510.117117 537.76685c-66.381873 0-120.19243-53.813626-120.19243-120.19243 0-66.38085 53.81158-120.19243 120.19243-120.19243 66.379826 0 120.191406 53.81158 120.191406 120.19243C630.309546 483.954247 576.496943 537.76685 510.117117 537.76685zM775.045975 548.225039c19.313881-38.694277 30.455639-82.060971 30.455639-128.092353 0-160.725588-132.249023-291.019073-295.383474-291.019073-163.136497 0-295.384497 130.293485-295.384497 291.019073 0 46.032406 11.141758 89.399099 30.455639 128.09133L125.289518 752.824881c0 0 76.03779 15.250332 153.184845 31.128975 51.423183 57.255005 102.624309 114.381074 102.624309 114.381074l110.239753-188.116425c6.240121 0.38681 12.437264 0.934279 18.777669 0.934279 6.339382 0 12.537548-0.547469 18.777669-0.934279l110.23873 188.116425c0 0 51.201126-57.126069 102.623285-114.381074 77.147054-15.878642 153.185868-31.128975 153.185868-31.128975L775.045975 548.225039zM375.386576 811.077609c0 0-36.930097-35.011398-71.629387-68.74878-49.228191-14.001899-98.910731-28.258601-98.910731-28.258601l69.683059-118.90818c40.195467 52.42807 97.852632 90.915639 164.583452 107.169835L375.386576 811.077609zM510.117117 658.139381c-132.632763 0-240.150522-107.7347-240.150522-240.638639 0-132.896776 107.517759-240.632499 240.150522-240.632499 132.630716 0 240.148475 107.735723 240.148475 240.632499C750.265592 550.404682 642.747833 658.139381 510.117117 658.139381zM716.476021 742.328829c-34.700313 33.737382-71.630411 68.74878-71.630411 68.74878l-63.72537-108.745726c66.730821-16.254196 124.387985-54.741765 164.583452-107.169835l69.682036 118.90818C815.386752 714.070228 765.705236 728.32693 716.476021 742.328829z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-dzp" viewBox="0 0 1000 1000">'+
      ''+
      '<path d="M831.7232 167.1237C747.1661 82.57 634.7397 36.0036 515.1578 36.0036c-119.5838 0-232.0102 46.5664-316.5693 131.1211C114.0314 251.6794 67.463 364.1001 67.463 483.6781s46.5683 231.9987 131.1255 316.5534c84.5581 84.5547 196.9845 131.1221 316.5693 131.1221 119.5818 0 232.0082-46.5674 316.5663-131.1221 84.5591-84.5537 131.1275-196.9745 131.1275-316.5534S916.2833 251.6794 831.7232 167.1237zM793.7774 762.2872 793.7774 762.2872 618.2562 586.7722c-18.783 18.7823-41.4146 31.3657-65.3564 37.7554l64.2771 239.8734c-32.8721 8.7501-67.0943 13.29-102.019 13.29-34.9258 0-69.149-4.5399-102.021-13.29l64.2751-239.8734c-23.9427-6.3907-46.5733-18.9731-65.3554-37.7554L236.5353 762.2862c-50.7007-50.6986-84.6581-111.8941-101.8941-176.6542l239.6593-64.2135c-6.5938-24.6973-6.5928-50.7846 0-75.4818l-239.6593-64.2125c17.236-64.7591 51.1934-125.9546 101.8941-176.6542l0 0L412.0545 380.582c18.784-18.7823 41.4166-31.3647 65.3584-37.7554l-64.2761-239.8714c32.8721-8.7501 67.0943-13.29 102.02-13.29 34.9228 0 69.147 4.5389 102.015 13.289l-64.2731 239.8724c23.9417 6.3907 46.5743 18.9731 65.3564 37.7544l175.5212-175.514c0 0 0 0 0 0.001 49.7283 49.7243 84.4992 110.4061 102.119 176.5923l-239.8822 64.2744c6.5918 24.6963 6.5918 50.7856 0.002 75.4828l239.8802 64.2734C878.2755 651.881 843.5047 712.5629 793.7774 762.2872zM538.8358 362.5562l-23.6799-115.5117-21.943 115.2139c-23.9248 4.3021-46.8292 15.6704-65.3204 34.1608-48.1933 48.1923-48.1953 126.3254 0 174.5197 48.1943 48.1913 126.3345 48.1913 174.5258 0 48.1963-48.1943 48.1963-126.3274 0-174.5207C584.3758 378.3735 562.1319 367.0881 538.8358 362.5562z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-sign" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.936 14.656C237.2096 14.656 14.592 237.2608 14.592 512.0512c0 274.7392 222.6176 497.3952 497.344 497.3952 274.816 0 497.4592-222.656 497.4592-497.3952C1009.408 237.2608 786.752 14.656 511.936 14.656zM512.9216 960.32c-248.0256 0-449.1264-201.1008-449.1264-449.1776 0-248 201.1008-449.1008 449.1264-449.1008 248.0768 0 449.1136 201.1008 449.1136 449.1008C962.0352 759.2192 760.9984 960.32 512.9216 960.32z"  ></path>'+
      ''+
      '<path d="M259.968 799.0144c-11.7504 0-22.464-5.8368-28.9792-15.6416-6.3744-9.7024-7.5264-21.8624-2.88-32.6016l62.848-148.416c0.96-2.4576 2.4704-4.7104 4.4032-6.5536l343.1552-343.1936c17.7664-17.7024 41.3568-27.4688 66.4704-27.4688 25.0368 0 48.5888 9.7536 66.3552 27.4688 17.7152 17.7536 27.456 41.2928 27.456 66.4704 0 24.9856-9.7408 48.5888-27.456 66.3552L428.1344 728.64c-1.8688 1.8688-4.032 3.328-6.5152 4.3392l-148.0448 63.2064C269.1712 798.016 264.5888 799.0144 259.968 799.0144L259.968 799.0144zM327.5648 622.2336l-54.8352 129.152 128.96-54.9632L742.016 356.1088c9.92-9.8688 15.424-23.0528 15.424-37.0304 0-14.0928-5.504-27.2128-15.424-37.0944-9.9456-9.9328-23.0784-15.4112-37.0304-15.4112-14.1056 0-27.2256 5.4784-37.1456 15.4112L327.5648 622.2336 327.5648 622.2336zM327.5648 622.2336"  ></path>'+
      ''+
      '<path d="M324.6336 587.328l105.792 105.856L401.152 722.5472l-105.856-105.856L324.6336 587.328 324.6336 587.328zM324.6336 587.328"  ></path>'+
      ''+
      '<path d="M647.9232 263.9872l105.8816 105.9072-29.312 29.2608-105.856-105.8432L647.9232 263.9872 647.9232 263.9872zM647.9232 263.9872"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-bonus" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M841.030675 197.889571c-0.785276-2.355828-2.355828-4.711656-6.282209-9.423313-10.993865-14.134969-27.484663-21.98773-45.546012-21.98773L234.01227 166.478528c-32.196319 0-58.110429 25.91411-58.110429 58.110429l0 575.607362c0 32.196319 25.91411 58.110429 58.110429 58.110429l555.190184 0c32.196319 0 58.110429-25.91411 58.110429-58.110429l0-36.122699c0-9.423313-7.852761-16.490798-16.490798-16.490798-9.423313 0-16.490798 7.852761-16.490798 16.490798 0 0.785276 0 1.570552 0 2.355828l0 33.766871c0 13.349693-10.993865 24.343558-24.343558 24.343558L234.01227 824.539877c-13.349693 0-24.343558-10.993865-24.343558-24.343558l0-581.104294 287.411043 133.496933 25.128834 10.993865 25.128834-10.993865 266.993865-124.07362 0 347.877301c0 1.570552 0 2.355828 0 3.141104 0 9.423313 7.852761 16.490798 16.490798 16.490798 9.423313 0 16.490798-7.067485 16.490798-16.490798l0-0.785276L847.312883 223.803681c0-3.92638-0.785276-7.852761-1.570552-11.779141C846.527607 212.02454 844.171779 204.171779 841.030675 197.889571zM522.208589 325.889571l-1.570552-0.785276L251.288344 199.460123l541.840491 0L522.208589 325.889571z"  ></path>'+
      ''+
      '<path d="M620.368098 530.06135l-38.478528 0 42.404908-87.95092c3.92638-7.852761-0.785276-18.846626-10.993865-25.128834-5.496933-3.92638-12.564417-4.711656-18.06135-3.141104-2.355828 0.785276-5.496933 2.355828-7.852761 5.496933l-52.613497 110.723926-18.846626 0-0.785276-2.355828c0-0.785276 0-0.785276 0-1.570552L463.312883 423.263804c-1.570552-3.141104-4.711656-4.711656-7.067485-5.496933-5.496933-1.570552-11.779141 0-18.06135 3.141104-9.423313 5.496933-14.920245 16.490798-10.993865 23.558282l42.404908 85.595092L424.04908 530.06135c-11.779141 0-21.202454 9.423313-21.202454 21.202454 0 11.779141 9.423313 21.202454 21.202454 21.202454l76.957055 0 0 40.834356L424.04908 613.300613c-11.779141 0-21.202454 9.423313-21.202454 21.202454s9.423313 21.202454 21.202454 21.202454l76.957055 0 0 77.742331c0 11.779141 9.423313 21.202454 21.202454 21.202454s21.202454-9.423313 21.202454-21.202454l0-77.742331L620.368098 655.705521c11.779141 0 21.202454-9.423313 21.202454-21.202454s-9.423313-21.202454-21.202454-21.202454l-76.957055 0 0-40.834356L620.368098 572.466258c11.779141 0 21.202454-9.423313 21.202454-21.202454C641.570552 539.484663 632.147239 530.06135 620.368098 530.06135z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ddcx" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M430.12096 573.44l-143.4624 0C275.37408 573.44 266.24 582.59456 266.24 593.92c0 11.40736 9.15456 20.48 20.43904 20.48l143.4624 0C441.42592 614.4 450.56 605.24544 450.56 593.92 450.56 582.51264 441.40544 573.44 430.12096 573.44z"  ></path>'+
      ''+
      '<path d="M696.27904 471.04 286.76096 471.04C275.23072 471.04 266.24 480.21504 266.24 491.52c0 11.38688 9.19552 20.48 20.52096 20.48l409.51808 0C707.80928 512 716.8 502.82496 716.8 491.52 716.8 480.13312 707.60448 471.04 696.27904 471.04z"  ></path>'+
      ''+
      '<path d="M696.27904 266.24 286.76096 266.24C275.23072 266.24 266.24 275.41504 266.24 286.72c0 11.38688 9.19552 20.48 20.52096 20.48l409.51808 0C707.80928 307.2 716.8 298.02496 716.8 286.72 716.8 275.33312 707.60448 266.24 696.27904 266.24z"  ></path>'+
      ''+
      '<path d="M696.27904 368.64 286.76096 368.64C275.23072 368.64 266.24 377.81504 266.24 389.12c0 11.38688 9.19552 20.48 20.52096 20.48l409.51808 0C707.80928 409.6 716.8 400.42496 716.8 389.12 716.8 377.73312 707.60448 368.64 696.27904 368.64z"  ></path>'+
      ''+
      '<path d="M901.12 669.16352 901.12 123.00288C901.12 54.96832 846.11072 0 778.26048 0L327.63904 0 296.96 0 81.92 215.04 81.92 860.16c0 67.82976 55.00928 122.88 122.85952 122.88l382.464 0c36.63872 25.8048 81.32608 40.96 129.55648 40.96 124.416 0 225.28-100.864 225.28-225.28C942.08 750.4896 926.9248 705.80224 901.12 669.16352zM833.76128 751.88224l-120.99584 122.92096c-7.65952 7.7824-19.88608 7.7824-27.52512 0l-64.9216-65.92512c-7.76192-7.92576-7.92576-20.86912-0.32768-28.91776 7.59808-8.0896 20.0704-8.23296 27.83232-0.34816l51.44576 52.26496 106.96704-109.24032c7.76192-7.92576 20.23424-7.76192 27.83232 0.32768S841.5232 743.97696 833.76128 751.88224zM860.16 624.92672C821.20704 592.75264 771.25632 573.44 716.8 573.44c-124.416 0-225.28 100.864-225.28 225.28 0 54.45632 19.33312 104.40704 51.48672 143.36L204.77952 942.08C159.55968 942.08 122.88 905.40032 122.88 860.16L122.88 245.76l102.4 0c61.44 0 102.4-40.96 102.4-102.4L327.68 40.96l450.58048 0C823.52128 40.96 860.16 77.6192 860.16 123.00288L860.16 624.92672z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wlcx" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M950.016 465.024c-14.976-17.024-72-97.024-102.976-128 0 0-15.68-17.024-49.664-17.024-12.224 0-49.024 0-49.024 0l-77.312 0L671.04 213.312C670.976 166.208 638.784 128 598.976 128L137.024 128C97.216 128 65.024 166.208 65.024 213.312l0 341.312c0 29.248 13.12 53.696 32 69.12L97.024 768c0 35.392 28.672 64 64 64l59.328 0c6.592 64.512 60.416 115.008 126.656 115.008S467.072 896.512 473.664 832l118.656 0c6.656 64.512 60.416 115.008 126.656 115.008S839.04 896.512 845.696 832l49.344 0c35.392 0 64-28.608 64-64L959.04 586.688c0 0 0-70.272 0-88C958.976 478.656 950.016 465.024 950.016 465.024zM97.024 540.032 97.024 224c0-41.28 20.608-64 56-64L584.32 160c35.392 0 54.656 25.408 54.656 66.688l0 318.656c0 41.408-21.952 62.656-57.344 62.656L153.024 608C117.632 608 97.024 581.376 97.024 540.032zM348.032 915.008c-52.992 0-96-43.072-96-96 0-52.992 43.008-96 96-96s96 43.008 96 96C444.032 871.936 401.024 915.008 348.032 915.008zM720 915.008c-52.992 0-96-43.072-96-96 0-52.992 43.008-96 96-96s96 43.008 96 96C816 871.936 772.992 915.008 720 915.008zM926.976 542.656l0 209.344c0 30.912-17.536 48-49.984 48l-31.936 0c-9.28-61.568-61.888-108.992-126.08-108.992s-116.8 47.424-126.08 108.992L473.088 800c-9.28-61.568-61.888-108.992-126.08-108.992s-116.864 47.424-126.08 108.992L180.992 800c-32.384 0-51.968-17.088-51.968-48L129.024 638.144C131.776 638.528 134.144 640 137.024 640l462.016 0c39.808 0 72-38.144 72-85.312L671.04 352l54.656 0 56 0c8 0 28.288-1.984 38.976 6.016 16.512 12.352 80.768 94.272 98.304 114.688 8 9.344 8 35.712 8 43.008L926.976 542.656z"  ></path>'+
      ''+
      '<path d="M825.984 398.016c-8.96-10.24-22.016-15.296-24.512-15.296l-28.032 0-20.992 0c-39.808 0-60.032 24.192-60.032 71.296l0 113.024c0 47.232 20.16 71.68 60.032 71.68l84.992 0c39.808 0 63.936-19.456 63.936-66.688L901.376 515.968c-0.064-3.52 4.096-16.832-4.416-30.016C879.424 458.88 845.696 420.48 825.984 398.016zM869.44 556.032c0 41.344-13.568 50.688-48.96 50.688l-56 0c-35.392 0-40-19.328-40-60.672L724.48 462.976c0-41.28 10.624-48.32 46.016-48.32l22.976 0c2.304 0 6.144-0.064 13.504 8.32 14.976 17.152 44.096 46.656 57.024 68.992 6.592 11.328 5.44 21.952 5.44 25.024L869.44 556.032z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-hot" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M200.704 450.56l49.152 0 0 118.784c8.192-12.288 16.384-20.48 28.672-28.672C290.816 536.576 303.104 532.48 319.488 532.48c28.672 0 45.056 8.192 61.44 24.576C389.12 573.44 397.312 593.92 397.312 622.592l0 135.168L348.16 757.76l0-126.976c0-20.48-4.096-32.768-12.288-45.056C327.68 577.536 315.392 573.44 299.008 573.44c-16.384 0-28.672 4.096-36.864 16.384-8.192 12.288-12.288 28.672-12.288 45.056l0 122.88L200.704 757.76 200.704 450.56z"  ></path>'+
      ''+
      '<path d="M630.784 565.248c20.48 20.48 28.672 49.152 28.672 81.92 0 32.768-8.192 61.44-28.672 81.92-20.48 20.48-49.152 32.768-81.92 32.768s-61.44-12.288-81.92-32.768c-20.48-20.48-28.672-49.152-28.672-81.92 0-32.768 8.192-61.44 28.672-81.92 20.48-20.48 45.056-32.768 81.92-32.768C585.728 532.48 610.304 544.768 630.784 565.248zM503.808 598.016c-8.192 12.288-12.288 32.768-12.288 53.248 0 20.48 4.096 36.864 12.288 53.248 12.288 16.384 28.672 24.576 45.056 24.576 20.48 0 36.864-8.192 45.056-24.576 8.192-16.384 16.384-32.768 16.384-53.248 0-20.48-4.096-40.96-16.384-53.248-12.288-16.384-24.576-24.576-45.056-24.576S516.096 581.632 503.808 598.016z"  ></path>'+
      ''+
      '<path d="M774.144 466.944l0 69.632 49.152 0 0 40.96-49.152 0 0 122.88c0 4.096 0 8.192 4.096 12.288 4.096 4.096 8.192 4.096 12.288 4.096l28.672 0 0 40.96-36.864 0c-20.48 0-32.768-4.096-40.96-16.384-8.192-8.192-12.288-24.576-12.288-40.96l0-122.88-40.96 0 0-40.96 40.96 0 0-49.152L774.144 466.944z"  ></path>'+
      ''+
      '<path d="M831.488 258.048l-36.864 0-253.952-229.376c-12.288-12.288-28.672-12.288-45.056 0L229.376 258.048 192.512 258.048c-81.92 0-151.552 69.632-151.552 155.648l0 438.272c0 86.016 65.536 155.648 151.552 155.648l643.072 0c81.92 0 151.552-69.632 151.552-155.648L987.136 413.696C983.04 327.68 917.504 258.048 831.488 258.048zM520.192 94.208l180.224 163.84-368.64 0L520.192 94.208zM917.504 847.872c0 49.152-36.864 90.112-86.016 90.112L192.512 937.984c-45.056 0-86.016-40.96-86.016-90.112L106.496 413.696c0-49.152 36.864-90.112 86.016-90.112l643.072 0c45.056 0 86.016 40.96 86.016 90.112L921.6 847.872z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)