import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Input, Menu, Divider, Header, Image, Container, Label, Button, Flag } from 'semantic-ui-react';

class App extends Component {

  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>


        <Container>
          <Menu secondary>
            <Menu.Menu position="left">
              <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='news'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='about'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
            <Menu.Item>
              <Input icon='star' placeholder='Search...' />
            </Menu.Item>
            <Menu.Menu position='right'>

              <Menu.Item>
                <Flag name='indonesia' />
                <Header as='h4'>
                  <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick
                </Header>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
        <Divider horizontal> SELAMAT DATANG !!! </Divider>
        <Container textAlign="center">
          <Header textAlign="right">
            <Label as='a' color='teal' tag>
              SPORT
            </Label>

          </Header>
          <p>
            Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducati akan melanjutkan ke CAS (Pengadilan Arbitrase Olahraga)?
            Suzuki, Honda, KTM, dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal. Pada prosesnya, Dovizioso tampil sebagai pemenang usai mengalahkan Marc Marquez.
            Keempat tim meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu motor melesat di trek. Sementara Ducati bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah disetujui Technical Director sebelum balapan.
            Pada awalnya, protes keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke Pengadilan Banding FIM. Sidang itu sendiri akan dilakukan sebelum seri kedua di Argentina digelar pada 29-31 Maret mendatang.
            Manajer umum Ducati Gigi Dall'Igna berkukuh tidak ada yang ilegal dengan komponen itu. Namun, seandainya pengadilan mengabulkan gugatan tersebut Ducati akan mempertimbangkan melanjutkan kasus ini ke CAS.
            "Di dalam federasi, derajatnya berakhir di Pengadilan Banding FIM. Anda harus pergi ke CAS, yang adalah pengadilan olahraga tapi di dalam kasus ini Anda keluar dari perimeter FIM," Dall'Igna mengungkapkan kepada MotoGP.com.
            "Saya bahkan tidak ingin memikirkan sampai titik ini. Kami sangat yakin bahwa kami tidak melanggar regulasi kok, dan yakin kami tidak melihat adanya alasan mengapa pengadilan banding bisa memutuskan secara berbeda."
          </p>
          <Button content='Tambah tautan ke list' icon='plus' labelPosition='left' color="teal" />
        </Container>

      </div>
    );
  }
}

export default App;
