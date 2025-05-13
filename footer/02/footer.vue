<template>
    <div class="footer">
        <div class="card">
            <img src="../assets/M.A.T.A.webp" alt="Logo">
            <h2>m.a.t.a agency</h2>
        </div>
        <div class="content">
            <div class="cipta">
                <h3>&copy; 2025 M.A.T.A Agency</h3>
            </div>
            <div class="opsi1">
                <p>home</p>
                <p>about</p>
                <p>contact</p>
                <p>portfolio</p>
            </div>
            <div class="opsi2">
                <p>document</p>
                <p><span>faq</span></p>
                <p>support</p>
            </div>
            <div class="opsi3">
                <p>instagram</p>
                <p>whatsapp</p>
                <p>twitter</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footers'
}
</script>

<style scoped>
.footer {
    width: 100%;
    min-height: 30vh;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    position: fixed;
    bottom: 0;
    display: grid;
    place-items: center;

    .card {
        width: 50%;
        height: 20vh;
        background-color: rgb(48, 43, 0);
        border-radius: 20px;
        position: absolute;
        top: -20%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: space-evenly;
        align-items: center;


        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            mix-blend-mode: screen;
            animation: rotate 4s linear infinite;
        }

        h2 {
            text-transform: capitalize;
            color: white;
            cursor: default;
            font-family: "Yellowtail", cursive;
        }
    }

    .content {
        width: 80%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: start;
        padding-top: 20px;

        .cipta,
        .opsi1,
        .opsi2,
        .opsi3 {
            display: flex;
            flex-direction: column;
            row-gap: 5px;

            p {
                font-family: Arial, Helvetica, sans-serif;
                text-transform: capitalize;
                cursor: pointer;
                color: white;
                transition: all 0.3s ease;

                span {
                    text-transform: uppercase;
                }
            }

            p:hover {
                color: black;
                text-decoration: underline;
            }

            h3 {
                cursor: default;
                font-weight: capitalize;
                color: white;
                font-family: Arial, Helvetica, sans-serif;
            }
        }

        .opsi1,
        .opsi2,
        .opsi3 {
            background-color: rgb(95, 108, 0);
            width: 200px;
            padding: 5px 10px;
            border-radius: 10px;
        }
    }
}

@keyframes rotate {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(360deg);
    }
}
</style>
