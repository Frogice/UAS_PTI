import { Container, Col, Row } from "react-bootstrap";
import kirby from "../assets/images/avatar/kirby.gif";
import sonic from "../assets/images/avatar/sonic.gif";
import React, { useState, Component, useEffect, useRef } from "react";
import axios from "axios";
import NewsList from "./NewsList";
import ProgressBar from "./ProgressBar";
import ProgressTemplate from "./ProgressTemplate";
import { Progress } from "react-sweet-progress";
import styles from "./About.module.css";
import img_1 from "./img_1.jpg";
import img_3 from "./img_3.jpeg";
import img_2 from "./img_2.jpg";

const Landingpage = () => {
  var gambar = [kirby, sonic];
  var i = 0;
  const [Image, setImage] = useState(gambar[i]);

  function next() {
    if (i >= gambar.length - 1) i = -1;
    i++;
    setImage(gambar[i]);
    console.log(i);
  }
  function prev() {
    if (i <= 0) i = gambar.length;
    i--;
    setImage(gambar[i]);
    console.log(i);
  }

  const [hidden, setHidden] = useState("false");
  const [about, setAbout] = useState("false");
  const [main, setMain] = useState("false");

  const [nama, setnama] = useState(null);
  const [print, setPrint] = useState(false);
  const [home, setHome] = useState(true);
  const [kafe, setKafe] = useState(false);
  const [kampus, setKampus] = useState(false);
  const [mall, setMall] = useState(false);

  function getData(val) {
    console.warn(val.target.value);
    setnama(val.target.value);
    setPrint(false);
  }

  function myFunction() {
    alert(
      " Nama, avatar, dan prodi kamu sudah tersimpan! Selamat Bermain :) 🔥🔥 "
    );
  }

  const About = () => {
    return (
      <div className={styles.About}>
        <div className="profile"></div>
        <div className={styles.head}>
          <h1 className="about">About Us</h1>
        </div>
        <div className={styles.boxes}>
          <div className={styles.flipCard}>
            <h2 className={styles.heading}>Anggota 1</h2>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardBack}>
                <h3>Anggota</h3>
                <p>Christian Alexander Andrue (00000043524)</p>
                <img src={img_1} width={180} height={180} />
              </div>
            </div>
          </div>
          <div className={styles.flipCard}>
            <h2 className={styles.heading}>Anggota 2</h2>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardBack}>
                <h3>Anggota</h3>
                <p>Ferdy Willy (00000043525)</p>
                <img src={img_3} width={180} height={180} />
              </div>
            </div>
          </div>
          <div className={styles.flipCard}>
            <h2 className={styles.heading}>Anggota 3</h2>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardBack}>
                <h3>Anggota</h3>
                <p>Rendy Januardi Winata (00000043680)</p>
                <img src={img_2} width={180} height={180} />
              </div>
            </div>
          </div>
          <div>
            <button
              class="play-button"
              onClick={() => {
                setHidden((s) => !s);
                setAbout((s) => !s);
              }}
            >
              <span></span>
              <span></span>
              <span>Play</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Login = () => {
    return (
      <Container className="intro">
        <Row>
          <Col id="tes" className="bg-tomato">
            <div className="avatar mt-3 ">
              <p>Choose Your Avatar : </p>
              <img
                className="arrow"
                onClick={prev}
                src="https://img.icons8.com/dusk/344/left.png"
                alt="#"
              />
              <img src={Image} alt="" width={100} />
              <img
                className="arrow"
                onClick={next}
                src="https://img.icons8.com/dusk/344/right.png"
                alt="#"
              />
            </div>
            <div className="bawah mt-3">
              <p>Enter Your Name Here...</p>
              <form>
                <div class="form-floating mb-3 mt-3">
                  <input
                    onChange={getData}
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={nama}
                  />
                  <label for="name">Name</label>
                </div>
                <select class="form-control mt-3">
                  <option selected>Pilih Jurusan Kamu !</option>
                  <option>Informatika</option>
                  <option>Sistem Informasi</option>
                  <option>DKV</option>
                  <option>Akuntansi</option>
                  <option>Film</option>
                  <option>Jurnalistik</option>
                </select>
              </form>
              <button
                type="submit"
                class="inc-button"
                id="submit"
                onClick={() => {
                  setHidden((s) => !s);
                  setMain((s) => !s);
                  setPrint(true);
                  myFunction();
                }}
              >
                Submit
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  const Main = () => {
    var greet;
    let menits;
    let jams;
    const [hari, setHari] = useState("Minggu");
    const [menit, setMenit] = useState(0);
    const [jam, setJam] = useState(0);
    const [percentMakan, setPercentMakan] = useState(50);
    const [percentBelajar, setPercentBelajar] = useState(0);
    const [percentMain, setPercentMain] = useState(50);
    const [percentTidur, setPercentTidur] = useState(50);
    const [disableMakan, setDisableMakan] = useState(true);
    const [disableBelajar, setDisableBelajar] = useState(true);
    const [disableMain, setDisableMain] = useState(true);
    const [disableTidur, setDisableTidur] = useState(true);
    const [tempat, setTempat] = useState("Unknown");

    function useInterval(callback, delay) {
      const savedCallback = useRef();

      useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);

      useEffect(() => {
        let id = setInterval(() => {
          savedCallback.current();
        }, delay);
        return () => clearInterval(id);
      }, [delay]);
    }

    function useInterval2(callback, delay) {
      const savedCallback = useRef();

      useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);

      useEffect(() => {
        let id = setInterval(() => {
          savedCallback.current();
        }, delay);
        return () => clearInterval(id);
      }, [delay]);
    }

    useInterval(() => {
      setPercentMakan(percentMakan - 1);
      setPercentMain(percentMain - 1);
      setPercentTidur(percentTidur - 1);
    }, 3000);

    function onIncClickMakan() {
      setPercentMakan(percentMakan + 10 < 100 ? percentMakan + 10 : 100);
      setPercentTidur(percentTidur - 5 > 0 ? percentTidur - 5 : 100);
    }

    function onIncClickMain() {
      setPercentMain(percentMain + 10 < 100 ? percentMain + 10 : 100);
      setPercentMakan(percentMakan - 5 > 0 ? percentMakan - 5 : 100);
    }

    function onIncClickTidur() {
      setPercentTidur(percentTidur + 10 < 100 ? percentTidur + 10 : 100);
    }

    function onIncClickBelajar() {
      setPercentBelajar(percentBelajar + 10 < 100 ? percentBelajar + 10 : 100);
      setPercentTidur(percentTidur - 5 > 0 ? percentTidur - 5 : 100);
      setPercentMain(percentMain - 5 < 100 ? percentMain - 5 : 100);
    }

    useInterval2(() => {
      setMenit(menit + 1);
    }, 100);

    function evaluasi() {
      alert(
        " Evaluasi kamu : Kamu tidak pernah belajar, kamu dikeluarkan dari kampus!"
      );
    }

    function evaluasi2() {
      alert(
        " Evaluasi kamu : Kamu terlalu sering bermain, hati-hati nilai kamu nanti jelek!"
      );
    }

    function evaluasi3() {
      alert(
        " Evaluasi kamu : Kamu rajin banget kuliahnya! cocok jadi mahasiswa teladan."
      );
    }

    function evaluasi4() {
      alert(
        " Evaluasi kamu : Semenjak kamu kuliah, kamu jadi jarang makan dan tidur, mungkin sudah saatnya cuti kuliah."
      );
    }

    function evaluasi5() {
      alert(" Evaluasi kamu : Kamu terlalu banyak tidur, kapan lulusnya?");
    }

    if (
      hari === "Sabtu" &&
      jam === 23 &&
      menit === 59 &&
      percentBelajar === 0
    ) {
      evaluasi();
    }

    if (hari === "Sabtu" && jam === 23 && menit === 59 && percentMain >= 85) {
      evaluasi2();
    }

    if (
      hari === "Sabtu" &&
      jam === 23 &&
      menit === 59 &&
      percentBelajar === 100
    ) {
      evaluasi3();
    }

    if (
      hari === "Sabtu" &&
      jam === 23 &&
      menit === 59 &&
      percentMakan <= 35 &&
      percentTidur <= 35
    ) {
      evaluasi4();
    }

    if (
      hari === "Sabtu" &&
      jam === 23 &&
      menit === 59 &&
      percentMakan <= 35 &&
      percentTidur <= 35
    ) {
      evaluasi5();
    }

    if (jam >= 6 && jam <= 11) greet = "Morning";
    else if (jam >= 12 && jam <= 16) greet = "Afternoon";
    else if (jam >= 17 && jam <= 18) greet = "Evening";
    else if ((jam >= 19 && jam <= 24) || (jam >= 0 && jam <= 5))
      greet = "Night";

    menits = menit;
    if (menits < 10) menits = "0" + menits;
    if (menits === 60) setMenit(0);

    jams = jam;
    if (jams < 10) jams = "0" + jams;
    if (menits === 60) setJam(jam + 1);
    if (jam === 24) setJam(0);
    if (jam === 24) {
      if (hari === "Minggu") {
        setHari("Senin");
      } else if (hari === "Senin") {
        setHari("Selasa");
      } else if (hari === "Selasa") {
        setHari("Rabu");
      } else if (hari === "Rabu") {
        setHari("Kamis");
      } else if (hari === "Kamis") {
        setHari("Jumat");
      } else if (hari === "Jumat") {
        setHari("Sabtu");
      } else if (hari === "Sabtu") {
        setHari("Minggu");
      }
    }

    return (
      <div className="Main">
        <Container>
          <Row>
            <Col>
              <Progress
                theme={{
                  active: {
                    symbol: "📖",
                    color: "#fb5f30"
                  }
                }}
                percent={percentBelajar}
                style={
                  ({ padding: "0 0  10px 5px" },
                  { width: "50%" },
                  { margin: "0 5px 5px 5px" })
                }
              />
              <h1>📖</h1>
            </Col>
            <Col>
              <Progress
                theme={{
                  active: {
                    symbol: "🍔",
                    color: "#fbc630"
                  }
                }}
                percent={percentMakan}
                style={
                  ({ padding: "0 0  10px 5px" },
                  { width: "50%" },
                  { margin: "0 5px 5px 5px" })
                }
              />
              <h1>🍔</h1>
            </Col>
            <Col>
              <Progress
                theme={{
                  active: {
                    symbol: "🎮",
                    color: "#19b7bf"
                  }
                }}
                percent={percentMain}
                style={
                  ({ padding: "0 0  10px 5px" },
                  { width: "50%" },
                  { margin: "0 5px 5px 5px" })
                }
              />
              <h1>🎮</h1>
            </Col>
            <Col>
              <Progress
                theme={{
                  active: {
                    symbol: "🛌",
                    color: "#7028f7"
                  }
                }}
                percent={percentTidur}
                style={
                  ({ padding: "0 0  10px 5px" },
                  { width: "50%" },
                  { margin: "0 5px 5px 5px" })
                }
              />
              <h1>🛌</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="Goto">
                <p className="goto">Go To:</p>
                <ul>
                  <li>
                    <button
                      type="submit"
                      class="main-button"
                      id="Home"
                      onClick={() => {
                        setDisableBelajar(true);
                        setDisableMain(false);
                        setDisableTidur(false);
                        setDisableMakan(false);
                        setTempat("Home");
                      }}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      type="submit"
                      class="main-button"
                      id="kampus"
                      onClick={() => {
                        setDisableMain(true);
                        setDisableTidur(true);
                        setDisableBelajar(false);
                        setDisableMakan(false);
                        setTempat("Kampus");
                      }}
                    >
                      Kampus
                    </button>
                  </li>
                  <li>
                    <button
                      type="submit"
                      class="main-button"
                      id="kafe"
                      onClick={() => {
                        setDisableBelajar(true);
                        setDisableTidur(true);
                        setDisableMakan(false);
                        setDisableMain(true);
                        setTempat("Kafe");
                      }}
                    >
                      Kafe
                    </button>
                  </li>
                  <li>
                    <button
                      type="submit"
                      class="main-button"
                      id="Mall"
                      onClick={() => {
                        setDisableBelajar(true);
                        setDisableTidur(true);
                        setDisableMakan(false);
                        setDisableMain(false);
                        setTempat("Mall");
                      }}
                    >
                      Mall
                    </button>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="clock">
                <p className="Game">
                  {hari} {jams} : {menits}
                </p>
              </div>
              <div className="profile">
                {print ? (
                  <h1 className="greet">
                    {" "}
                    Good {greet} {nama}
                  </h1>
                ) : null}
                <img src={Image} alt="" width={100} />
              </div>
            </Col>
            <Col>
              <div className="aktivitas">
                <p className="at"> @ {tempat} </p>
                <ul>
                  <li>
                    <button
                      type="submit"
                      class="act-button"
                      id="Makan"
                      disabled={disableMakan}
                      onClick={onIncClickMakan}
                    >
                      Makan
                    </button>
                  </li>
                  <li>
                    <button
                      type="submit"
                      class="act-button"
                      id="Tidur"
                      disabled={disableTidur}
                      onClick={onIncClickTidur}
                    >
                      Tidur
                    </button>
                  </li>
                  <li>
                    <button
                      type="submit"
                      class="act-button"
                      id="Main"
                      disabled={disableMain}
                      onClick={onIncClickMain}
                    >
                      Main
                    </button>
                  </li>
                  <li>
                    <button
                      type="submit"
                      class="act-button"
                      id="Belajar"
                      disabled={disableBelajar}
                      onClick={onIncClickBelajar}
                    >
                      Belajar
                    </button>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div class="smartphone">
                <div class="content">
                  <NewsList />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  return (
    <div>
      <Container>
        <Row id="Login">
          <Col>
            <div></div>
          </Col>
          {about ? <About /> : null}
          {!main ? <Main /> : null}
          {!hidden ? <Login /> : null}
        </Row>
      </Container>
    </div>
  );
};

export default Landingpage;
