<template>
    <header>
        <div class="container">
            <div class="content">
                <div class="card">
                    <div class="card-body">
                        <!-- tambahkan props jika ingin menambahkan data, contoh {{ title }}-->
                        <img class="profile" src="../assets/Ejen Alicia.jpg" alt="Ejen Ali Movie">
                        <h2>Ejen Alicia</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, illo.</p>
                    </div>
                    <div class="button">
                        <button><i class="fa-solid fa-heart"></i></button>
                        <button><i class="fa-solid fa-thumbs-up"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'card'
    // // contoh props
    // props: {
    //     title: {
    //         type: String,
    //         required: true
    //     },
    //     description: {
    //         type: String,
    //         required: true
    //     },
    //     image: {
    //         type: String,
    //         required: true
    //     }
    // }
}
</script>

<style scoped>
header {
    width: 100dvw;
    height: 100dvh;
    background: url('../assets/cinema.jpg') no-repeat center center/cover;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .content {
            width: 90%;
            height: 90%;
            display: grid;
            place-items: center;

            .card {
                width: 300px;
                height: 300px;
                background-color: yellow;
                display: grid;
                place-items: center;
                position: relative;
                overflow: hidden;
                border-radius: 10px;
                box-shadow: 10px 10px 20px black;

                .card-body {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    row-gap: 10px;
                    transition: transform 0.5s ease;

                    .profile {
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                        object-fit: cover;
                        position: relative;
                        top: 0;
                        left: 0;
                    }

                    h2,
                    p {
                        text-align: center;
                        font-family: Arial, Helvetica, sans-serif;
                        cursor: default;
                    }
                }

                .button {
                    width: 100%;
                    height: 20%;
                    background-color: white;
                    position: absolute;
                    bottom: 0;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    opacity: 0;
                    transition: opacity 0.5s ease;

                    button {
                        width: 120px;
                        height: 35px;
                        border-radius: 10px;
                        background-color: yellow;
                        border: none;
                        outline: none;
                        cursor: pointer;
                        box-shadow: 5px 5px 10px black;
                        transition: all 0.3s ease;

                        i {
                            font-size: 1.2rem;
                            color: red;
                        }
                        
                        .fa-thumbs-up {
                            font-size: 1.2rem;
                            color: blue;
                        }
                    }

                    button:hover {
                        transform: scale(1.1);
                        box-shadow: none;
                    }
                }
            }

            .card:hover .card-body {
                transform: translateY(-10%);
            }

            .card:hover .button {
                opacity: 1;
            }
        }
    }
}
</style>