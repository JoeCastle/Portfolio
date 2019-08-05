//Todo
//Check all libraries and packages are upto date
//Remove jquery
//Add mobx stores
//

import { Helmet } from 'react-helmet';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Introduction } from '../Introduction';
import { ProjectsSummary } from '../ProjectsSummary';
import { SkillsSummary } from '../SkillsSummary';
import { ContactForm } from '../ContactForm';

//import $ from 'jquery';

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class Home extends React.Component<Props> {

    //componentDidMount() {
    //    $(document).ready(function () {
    //        //$('.section').css({ "opacity": "0" });

    //        /* Every time the window is scrolled ... */
    //        $('#page-parent').scroll(function () {
    //            /* Check the location of each desired element */
    //            $('.section').each(function (i: any) {

    //                var bottom_of_object = $(this).offset()!.top + $(this).outerHeight()!;
    //                //var bottom_of_window = $(window).scrollTop()! + $(window).height()!;

    //                var windowScrollTop = $(window).scrollTop();
    //                var windowHeight = $(window).height();

    //                var bottom_of_window = windowScrollTop! + windowHeight!;

    //                console.log("bottom_of_object: " + bottom_of_object + " and bottom_of_window: " + bottom_of_window);

    //                /* If the object is completely visible in the window, fade it it */
    //                if (bottom_of_window > bottom_of_object) {

    //                    $(this).animate({ 'opacity': '1' }, 300);

    //                    //opacity 1 by default, so it will be visible server side.
    //                    //in if statement, keep adding opacity until it is in view.


    //                    //Or add opacity to all sections via jquery, then remove it in if statement
    //                }

    //            });

    //        });

    //    });
    //}

    public render() {
        return <div>
            <Helmet>
                <title>Home - Joseph Castle</title>
                <meta name="description" content="Home page" />
            </Helmet>
            <Introduction {...this.props} />
            <ProjectsSummary {...this.props} />
            <SkillsSummary {...this.props} />
            <ContactForm {...this.props} />
        </div>;
    }
}
