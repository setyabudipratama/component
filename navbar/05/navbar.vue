<template>
    <div class="navbar" :class="{ active: isActive }">
        <img src="../assets/vue.svg" alt="logo vue" :class="{ active: isActive }">
        <ul :class="{ active: isActive }">
            <li>home</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        <button :class="{ active: isActive }">
            login
        </button>
        <div class="button" 
            :class="{ active: isActive }" @click="toggleActive">
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        }
    }
};
</script>

<style scoped>
.navbar {
    width: 50px;
    height: 50px;
    background-color: yellow;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: relative;
    transition: all 0.8s ease;

    img {
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.8s ease;
    }

    img.active {
        opacity: 1;
    }

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 50%;
        opacity: 0;
        transition: opacity 0.8s ease;

        li {
            list-style: none;
            font-size: 1.2rem;
            text-transform: capitalize;
            cursor: pointer;
        }

        li:hover {
            text-decoration: underline;
        }
    }

    ul.active {
        opacity: 1;
    }

    button {
        width: 100px;
        height: 35px;
        background-color: transparent;
        border: 2px solid black;
        outline: none;
        border-radius: 10px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
    }

    button:hover {
        background-color: black;
        color: white;
    }

    button.active {
        opacity: 1;
    }

    .button {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 30px;
        height: 30px;
        cursor: pointer;
        z-index: 5;
        transition: all 0.8s ease;

        span {
            position: absolute;
            top: 50%;
            left: 50%;
            background-color: black;
            width: 30px;
            height: 5px;
            transform: translate(-50%, -10px);
            transition: all 0.8s ease;
        }

        span::before {
            content: '';
            position: absolute;
            background-color: black;
            width: 30px;
            height: 5px;
            transform: translate(0, 15px);
            transition: all 0.8s ease;
        }
    }

    .button.active {
        transform: translateX(400px) translateY(-50%);
        background-color: yellow;
        border-radius: 10px;
        width: 50px;
        height: 50px;
    }

    .button.active span {
        transform: rotate(45deg) translate(-40%, 200%);
    }
    
    .button.active span::before {
        transform: rotate(90deg) translate(0, 0);
    }
}

.navbar.active {
    width: 60vw;
    height: 10vh;
}
</style>
