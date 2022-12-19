import './containgen.scss';
const Containgen = () => {
  const data = [
    {
      id: 1,
      title: 'Air Transmission',
      desc: ' Objectively evolve tactical before extensible initiatives. Efficiently simplify',
      imgSrc:
        'https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/main/Covid-19/img/card1-image.png',
    },
    {
      id: 2,
      title: 'Human Contacts',
      desc: 'Washing your hands is one of the simplest ways you can protect youresef and others from the spread of germs and viruses.',
      imgSrc:
        'https://github.com/alaattinerby/Covid-19-Website/blob/main/Covid-19/img/card2-image.png?raw=true',
    },
    {
      id: 3,
      title: 'Contained Objects',
      desc: 'Use the tissue while sneezing,In this way, you can protect your droplets.',
      imgSrc:
        'https://github.com/alaattinerby/Covid-19-Website/blob/main/Covid-19/img/card3-image.png?raw=true',
    },
  ];
  return (
    <section className='section contagion'>
      <div className='container'>
        <div className='upside upside--top'>
          <h2 className='upside__title'>Covid-19</h2>
          <span className='upside__span'>Contagion</span>
          <p className='upside__desc'>
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type
          </p>
        </div>
        <div className='row'>
          {data.map((item) => {
            return (
              <div
                className='col-12 col-md-6 col-lg-4'
                key={item.id}
              >
                <div className='card'>
                  <figure className='card__figure'>
                    <img
                      src={item.imgSrc}
                      className='card__image'
                      alt={item.title}
                    />
                  </figure>
                  <h3 className='card__title'>{item.title}</h3>
                  <p className='card__desc'>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Containgen;
