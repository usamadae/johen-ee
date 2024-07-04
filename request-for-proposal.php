<!DOCTYPE html>
<html lang="en">

<head>
    <?php include 'layouts/head.php'; ?>
    <title>HPIT - RFP</title>
</head>

<body>
    <?php include 'components/header.php'; ?>


    <section class="company-banner" style="background-image: url('assets/img/assets/our-leaders.jpg') !important;">
        <div class="container" bis_skin_checked="1">
            <div class="row" bis_skin_checked="1">

                <div class="col-md-6 position-relative z-index-10" bis_skin_checked="1">

                    <h1>Request for
                        <br>
                        Proposal
                    </h1>

                    <p class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                </div>
            </div>
        </div>
    </section>

    <section class="leadership_btns bg-white-team pt-lg-5 pb-lg-5 leaders-img-team contact-us">
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Submit your RFP</h2>
                <p>Please use this form to submit your request for proposal to HPIT.</p>
                <form action="submit_rfp.php" method="POST" enctype="multipart/form-data">

                    <h2>Your details</h2>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName" class="form-label">First Name *</label>
                            <input type="text" class="form-control" id="firstName" name="first_name" placeholder="First name here" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName" class="form-label">Last Name *</label>
                            <input type="text" class="form-control" id="lastName" name="last_name" placeholder="Last name here" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="email" class="form-label">Email Address *</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Add email" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="jobTitle" class="form-label">Job Title</label>
                            <input type="text" class="form-control" id="jobTitle" name="job_title" placeholder="Job Title">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="department" class="form-label">Department</label>
                            <input type="text" class="form-control" id="department" name="department" placeholder="Department">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="phoneNumber" class="form-label">Phone Number</label>
                            <input type="tel" class="form-control" id="phoneNumber" name="phone_number" placeholder="Phone Number">
                        </div>
                    </div>

                    <h2>Company details</h2>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="organization" class="form-label">Organization</label>
                            <input type="text" class="form-control" id="organization" name="organization" placeholder="Organization">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="industry" class="form-label">Industry</label>
                            <input type="text" class="form-control" id="industry" name="industry" placeholder="Industry">
                        </div>
                    </div>

                    <h2>Additional Information</h2>
                    <p>Accepted attachments types are .doc, .docx, .ppt, .pptx, .xls, .xlsx, .zip, and .pdf.</p>
                    <div class="mb-3">
                        <label for="attachment" class="form-label">Attachment</label>
                        <input type="file" class="form-control-file" id="attachment" name="attachment">
                    </div>
                    <div class="mb-3">
                        <label for="help" class="form-label">How can we help you? *</label>
                        <textarea class="form-control" id="help" name="help" rows="4" placeholder="How can we help you?" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary contact-btn mt-3">Submit RFP</button>
                </form>
            </div>

        </div>
    </div>
	</section>



   
    <?php include 'components/footer.php'; ?>
    <?php include 'layouts/body.php'; ?>
</body>

</html>