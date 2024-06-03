<!DOCTYPE html>
<html lang="en">

<head>
    <?php include 'layouts/head.php'; ?>
    <title>Company Overview 2</title>
</head>

<body>
    <?php include 'components/header.php'; ?>


    <section class="company-banner" style="background-image: url('assets/img/assets/company-overview.jpg') !important;">
        <div class="container">
            <div class="row">

                <div class="col-md-6 position-relative z-index-10">

                    <h1>Company
                        <br>
                        Overview
                    </h1>

                    <p class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <a class="defaultBtn mt-3" href="#">Learn more</a>
                </div>
            </div>
        </div>
    </section>

    <section class="global-scale bg-padding ">
        <div class="container">
            <div class="row">
                <h2 class="sectionHead">Lorem Ipsum is <span>simply dummy text</span></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged
                </p>

            </div>
        </div>
    </section>

    <section class="bg-white bg-padding global-scale">
        <div class="container">
            <div class="row">
                <h2 class="sectionHead pb-5">Lorem Ipsum is <span>simply dummy text</span></h2>
                <div class="col-lg-4"></div>
                <div class="col-lg-8 border-start-pad">
                    <h3 class="section_head2">Our <span>Mission</span></h3>
                    <p class="text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged</p>


                    <h3 class="section_head2">Our <span>vision</span></h3>
                    <p class="text-start"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>


            <div class="row py-5 company-overview-video">
                <div class="video">
                    <span class="home-video-close is-hidden" onclick="videoStop()">&times;</span>
                    <div class="videoWrapper videoWrapper169 js-videoWrapper">

                        <iframe class="videoIframe js-videoIframe" src="" frameborder="0"
                            allowTransparency="true" allowfullscreen
                            data-src="https://player.vimeo.com/video/189360311?autoplay=1&title=0&byline=0&portrait=0&share=0"></iframe>

                        <button class="videoPoster js-videoPoster"
                            style="background-image:url('assets/img/assets/join-video.jpg');">Play
                            video</button>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ctaSec keep-in-touch">
        <div class="container">
            <div class="row">
                <div class="col-md-9 m-auto text-center">
                    <h3 class="anyfeedback">
                        ANY FEEDBACK FOR US?
                    </h3>
                    <p>At HPIT, we always want to hear from our stakeholders:</p>
                    <a class="defaultBtn mt-3" href="#">Contact Us</a>

                </div>
            </div>
        </div>
    </section>
    <?php include 'components/footer.php'; ?>
    <?php include 'layouts/body.php'; ?>
</body>

</html>