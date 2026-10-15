/*
  Список работ. Порядок здесь = порядок на сайте.
  Чтобы добавить работу:
    1. Положите в images/works/ два файла: name.webp (~1600px) и name-sm.webp (~720px).
    2. Добавьте сюда строку: file, w/h (размер большого фото), cat и название на 4 языках.
  Категории: music, portraits, scenes, street, kids
*/
window.WORKS = [
  { file: 'in-bloom',         w: 1280, h: 960,  cat: 'portraits', title: { az: 'Çiçəklənmə', en: 'In Bloom', ru: 'Цветение', tr: 'Çiçeklenme' } },
  { file: 'rock-legends',     w: 1600, h: 1200, cat: 'music',     title: { az: 'Rok əfsanələri', en: 'Rock Legends', ru: 'Легенды рока', tr: 'Rock efsaneleri' } },
  { file: 'icherisheher',     w: 1500, h: 844,  cat: 'scenes',    title: { az: 'İçərişəhər', en: 'Icherisheher, Baku', ru: 'Ичеришехер', tr: 'İçerişehir, Bakü' } },
  { file: 'cars',             w: 1500, h: 844,  cat: 'kids',      title: { az: 'Maşınlar', en: 'Cars', ru: 'Тачки', tr: 'Arabalar' } },
  { file: 'wolf-raven',       w: 1369, h: 1599, cat: 'street',    title: { az: 'Canavar və qara qarğa', en: 'Wolf and Raven', ru: 'Волк и ворон', tr: 'Kurt ve kuzgun' } },
  { file: 'eden',             w: 1167, h: 1600, cat: 'scenes',    title: { az: 'Cənnət bağı', en: 'Garden of Eden', ru: 'Райский сад', tr: 'Cennet bahçesi' } },
  { file: 'muse',             w: 1600, h: 1200, cat: 'portraits', title: { az: 'İlham pərisi', en: 'Muse', ru: 'Муза', tr: 'İlham perisi' } },
  { file: 'rammstein',        w: 1080, h: 855,  cat: 'music',     title: { az: 'Rammstein', en: 'Rammstein', ru: 'Rammstein', tr: 'Rammstein' } },
  { file: 'fast-food',        w: 1600, h: 619,  cat: 'street',    title: { az: 'Fast-fud', en: 'Fast Food', ru: 'Фастфуд', tr: 'Fast food' } },
  { file: 'space',            w: 1582, h: 1500, cat: 'scenes',    title: { az: 'Kosmos', en: 'Deep Space', ru: 'Космос', tr: 'Uzay' } },
  { file: 'princesses',       w: 1500, h: 844,  cat: 'kids',      title: { az: 'Disney şahzadələri', en: 'Disney Princesses', ru: 'Принцессы Disney', tr: 'Disney prensesleri' } },
  { file: 'hip-hop',          w: 887,  h: 1600, cat: 'music',     title: { az: 'Hip-hop əfsanələri', en: 'Hip-Hop Legends', ru: 'Легенды хип-хопа', tr: 'Hip-hop efsaneleri' } },
  { file: 'absheron-oil',     w: 1500, h: 844,  cat: 'scenes',    title: { az: 'Abşeron neft mədənləri', en: 'Absheron Oil Fields', ru: 'Нефтяной Апшерон', tr: 'Abşeron petrol sahaları' } },
  { file: 'lady-in-red',      w: 960,  h: 1280, cat: 'portraits', title: { az: 'Qırmızılı qadın', en: 'Lady in Red', ru: 'Девушка в красном', tr: 'Kırmızılı kadın' } },
  { file: 'punk-rock',        w: 1600, h: 1200, cat: 'music',     title: { az: 'Bütün gecə pank-rok', en: 'Punk Rock Through the Night', ru: 'Панк-рок всю ночь', tr: 'Gece boyu punk rock' } },
  { file: 'creation-of-adam', w: 1600, h: 834,  cat: 'scenes',    title: { az: 'Adəmin yaradılışı', en: 'The Creation of Adam', ru: 'Сотворение Адама', tr: 'Âdem’in Yaratılışı' } },
  { file: 'kung-fu-panda',    w: 1500, h: 844,  cat: 'kids',      title: { az: 'Kunq-fu Panda', en: 'Kung Fu Panda', ru: 'Кунг-фу Панда', tr: 'Kung Fu Panda' } },
  { file: 'mustang',          w: 1080, h: 1080, cat: 'street',    title: { az: 'Mustang', en: 'Mustang', ru: 'Мустанг', tr: 'Mustang' } },
  { file: 'chief',            w: 960,  h: 1280, cat: 'portraits', title: { az: 'Qəbilə başçısı', en: 'The Chief', ru: 'Вождь', tr: 'Kabile reisi' } },
  { file: 'colosseum',        w: 1500, h: 844,  cat: 'scenes',    title: { az: 'Kolizey', en: 'The Colosseum', ru: 'Колизей', tr: 'Kolezyum' } },
  { file: 'horror-icons',     w: 1263, h: 1600, cat: 'music',     title: { az: 'Qorxu filmlərinin qəhrəmanları', en: 'Horror Icons', ru: 'Герои хорроров', tr: 'Korku filmi ikonları' } },
  { file: 'huntrix',          w: 1600, h: 1200, cat: 'kids',      title: { az: 'HUNTR/X', en: 'HUNTR/X', ru: 'HUNTR/X', tr: 'HUNTR/X' } },
  { file: 'strength',         w: 720,  h: 1280, cat: 'portraits', title: { az: 'Güc', en: 'Strength', ru: 'Сила', tr: 'Güç' } },
  { file: 'band-wall',        w: 1200, h: 1600, cat: 'music',     title: { az: 'Rok qrupları divarı', en: 'Wall of Bands', ru: 'Стена рок-групп', tr: 'Rock grupları duvarı' } },
  { file: 'city-night',       w: 1500, h: 844,  cat: 'scenes',    title: { az: 'Gecə şəhəri', en: 'City at Night', ru: 'Ночной город', tr: 'Gece şehri' } },
  { file: 'pop-art',          w: 960,  h: 1280, cat: 'street',    title: { az: 'Pop-art', en: 'Pop Art', ru: 'Поп-арт', tr: 'Pop art' } },
  { file: 'mortal-kombat',    w: 1200, h: 1600, cat: 'music',     title: { az: 'Mortal Kombat', en: 'Mortal Kombat', ru: 'Mortal Kombat', tr: 'Mortal Kombat' } },
  { file: 'tower-bridge',     w: 1599, h: 768,  cat: 'scenes',    title: { az: 'Tauer körpüsü', en: 'Tower Bridge', ru: 'Тауэрский мост', tr: 'Tower Köprüsü' } },
  { file: 'faces',            w: 960,  h: 1280, cat: 'portraits', title: { az: 'Simalar', en: 'Faces', ru: 'Лица', tr: 'Yüzler' } },
  { file: 'the-crow',         w: 1200, h: 1600, cat: 'music',     title: { az: 'Qarğa', en: 'The Crow', ru: 'Ворон', tr: 'Karga' } },
  { file: 'jordan',           w: 1200, h: 1600, cat: 'kids',      title: { az: 'Maykl Cordan', en: 'Michael Jordan', ru: 'Майкл Джордан', tr: 'Michael Jordan' } },
  { file: 'moon',             w: 1600, h: 798,  cat: 'scenes',    title: { az: 'Ay altında', en: 'Under the Moon', ru: 'Под луной', tr: 'Ay ışığında' } },
  { file: 'biker-club',       w: 1600, h: 784,  cat: 'street',    title: { az: 'Bayker klubu', en: 'Biker Club', ru: 'Байкерский клуб', tr: 'Motosiklet kulübü' } },
  { file: 'movie-villains',   w: 948,  h: 1600, cat: 'music',     title: { az: 'Kinonun mənfi qəhrəmanları', en: 'Movie Villains', ru: 'Злодеи кино', tr: 'Sinemanın kötüleri' } },
  { file: 'heavy-metal',      w: 1600, h: 1064, cat: 'music',     title: { az: 'Hevi-metal', en: 'Heavy Metal', ru: 'Хеви-метал', tr: 'Heavy metal' } },
  { file: 'sons-of-anarchy',  w: 1600, h: 1200, cat: 'music',     title: { az: 'Anarxiya oğulları', en: 'Sons of Anarchy', ru: 'Сыны анархии', tr: 'Sons of Anarchy' } }
];
