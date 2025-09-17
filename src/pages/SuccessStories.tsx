import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Camera, Heart } from "lucide-react";

// Import success story photos
import alanPhoto from "@/assets/successStories/alan.png";
import hellenPhoto from "@/assets/successStories/hellen.png";
import joshuaPhoto from "@/assets/successStories/joshua.png";
import rachelPhoto from "@/assets/successStories/rachel.png";
import radioGagaPhoto from "@/assets/successStories/radio gaga.png";
import ryanBlakePhoto from "@/assets/successStories/ryan-blake.png";
import toddPhoto from "@/assets/successStories/todd.png";

interface Story {
  id: number;
  title: string;
  summary: string;
  fullStory: string;
  photoSrc?: string;
}

const successStories: Story[] = [
  {
    id: 1,
    title: "Amy",
    summary: "Amy has been supported by Renaissance Group under Choices in Community Living since 2014, using a hosted funding model that gives her family flexibility to build a dedicated team of support workers.",
    fullStory: "Amy has been supported by the Renaissance Group under Choices in Community Living since 2014. Opting for a hosted funding model, Amy and her family have been managing her support independently, giving them the flexibility to build a team of support workers who truly understand her needs and aspirations.\n\nWith Choices in Community Living Amy has been able to shape a life filled with joy, adventure, and meaningful experiences—opportunities she might not have otherwise had. From engaging in exciting activities to forming deep connections with those around her, Amy's journey is a testament to the power of personalized support.\n\nA key part of Amy's success has been the dedicated and compassionate team of carers her family has built over the years enabling her to thrive, fostering independence and live life on her own terms.\n\nAmy's story highlights the incredible impact of choice, control, and a strong support system in empowering individuals to lead fulfilling lives. She is a shining example of what's possible when people have the opportunity to direct their own journey, surrounded by those who truly care."
  },
  {
    id: 2,
    title: "Taylor",
    summary: "At 20 years old, Taylor has been supported by Renaissance for just under two years and has become incredibly confident using public transport independently.",
    fullStory: "Hello, my name is Taylor. I'm 20 years old and have been supported by Renaissance for just under two years now. I'm currently involved with real-world living and enjoy being active with a lot of practical tasks there that I've been building on at home with support, like cooking, gardening, and woodwork.\n\nOne of the things I'm most proud of is my knowledge and use of public transport. I can plan trips, operate my hop card, check route details and much more.\n\nBefore mum passed away last year, I was limited to where mum was comfortable driving me. I never really ventured down the familiar streets I had always seen on my way to my day course centre or other planned trips. I feel like I've gained so much understanding of public transport that I've even corrected my support worker on a couple of occasions! My social life has also grown hugely, as I can make independent plans when I want to go out and find my way back without too much trouble. I know mum would be proud of how much I've progressed in this area and I'm looking forward to going to more new places.\n\nMy dad is my biggest inspiration and source of encouragement, he helped me form my music tastes, and keeps me on track with my day to day life, he's a huge source of strength to all of us at home and along with support from Renaissance Group, I feel like I'm reaching new potential.\n\nI've recently been asked to begin work, and I'm looking forward to using public transport to get there and back again on my own. I've grown a lot over the last couple of years and enjoy life so much more now that I'm out and about enjoying my newfound Independence."
  },
  {
    id: 3,
    title: "Manuele",
    summary: "Manuele has completed the Round the Bays event four times, with his goal to run a half marathon while using his Cogy wheelchair that allows him to pedal.",
    fullStory: "I have always wanted to be able to exercise on my own and at any time I choose to. But going to the gym or swimming is not safe to do independently. My ability to exercise is restricted to someone being available.\n\n2024 was the fourth time that I participated in and completed the 8.4KM Round the Bays event. I completed it in my fastest time of 1 hour and 31 minutes, and I appreciate my support worker from Renaissance Group for supporting me on the day.\n\nAfter completing the round-the-bays this year, I reflected and thought that this is fun and I enjoy it, so why not do more? Why not make it a hobby and set a goal to run a Half Marathon? Yes, that's my goal, and if I'm on track, I want to run a half marathon in November 2024.\n\nWith this drive to Cogy (wheelchair that allows me to pedal) more, I decided to do a 10KM event. Over the past two years of Cogying with my support team, I have built up my confidence to go out on my own and completed two tracks independently during my practice runs.\n\nIn April 2024, I completed the Waterfront 10 Km classic marathon in 1 hour, 50 minutes and 47 seconds. My support person on the day was incredible encouraging me along the whole course, supporting me with drinks, adjusting my seat and making sure I looked respectable. He kept up with me when I went my fastest and encouraged me to keep it up.",
  },
  {
    id: 4,
    title: "Harlyn",
    summary: "18-year-old Harlyn has been on an incredible journey with Renaissance Group since March, achieving independence in travel and daily activities that amazed his former teachers.",
    fullStory: "\"It feels awesome\"..... Harlyn.\n\nI'm Harlyn, an 18-year-old who's been on an incredible journey with Renaissance Group since March this year. In a short time, their support has helped me grow in ways I never imagined.\n\nThe Supported Life Coordinator at Renaissance helped me set my goals, and the support workers have been guiding me to achieve them. They let me make my own decisions while offering great advice, making me feel more independent.\n\nOne of my biggest achievements was travelling to our family barber on my own. After a few practice runs with my support worker, I used the AT App Planner and hopped three different buses independently, crossing roads carefully to reach my destination. It was a big deal, and I felt really proud of myself.\n\nI've also learned to handle shopping on my own and can now order and pay for my food at cafes. When I visited my old high school, my teachers and friends were amazed at how much more confident I've become. I stay active with weekly golf practice and regular library visits, and cooking new dishes has really boosted my confidence in the kitchen.\n\nHaving support during my conversations with strangers helps me feel safer and better understand social boundaries and cues.\n\nThanks to Renaissance Group, I'm a more confident young man, ready to take on whatever comes next.",
  },
  {
    id: 5,
    title: "Cheryl",
    summary: "Cheryl started her health journey in September 2020 with the goal of losing 5kg and has achieved remarkable results, transforming from 83kg to 61.9kg through dedication and discipline.",
    fullStory: "Cheryl started her journey back in September 2020 with the goal of losing 5kgs.\n\nShe has smashed that goal with hard work and discipline, working out 3 days a week at the gym, walking almost every day, completely changing her diet and portion sizes, and sticking to her healthy diet. She started at 83kg and now is 61.9kg.\n\nWhen she started the journey, Cheryl struggled to walk 500 meters down the road. She often would stop to rest as the pain in her arthritic knee would give her grief. As she lost weight, her mobility increased and she went on to walk the Round the Bays of 8.4km without stopping. As a result, her blood pressure medication has been reduced and almost never complains of knee pain.\n\nInspired by completing her first event, with the support of her Renaissance Group support worker she competed in the Rotorua 5.5 KM walking marathon. As it had been 30 years since Cheryl's last holiday, while in Rotorua she celebrated her success and enjoyed some of the sights and activities that Rotorua had to offer.\n\nCheryl is committed to living a healthy lifestyle. Her future goal is to join the Renaissance Group Round the Bays team.\n\nHer determination is inspirational!",
  },
  {
    id: 6,
    title: "Hellen",
    summary: "Hellen attends the Arts for Health Community Trust in Hamilton where she has learned to steady her hands and create beautiful paintings, even participating in art exhibitions.",
    fullStory: "Hellen loves to attend the Arts for Health Community Trust in Hamilton. Hellen enjoys doing all sorts of artwork, such as pastel work, crayons, PVA and glitter, and she especially loves to paint.\n\nHellen used to put paint on paper without making pictures due to her inability to control herself with her disability (Huntingtons). She has now learnt how to steady her hands and is now able to paint pictures. In the photo, Hellen has painted the sun, clouds, flowers and hot air balloons. Hellen and her support team are extremely proud of how far she has come.\n\nIn 2021 Hellen started participating in art exhibitions; the profit she makes from these is put towards buying more canvases and art supplies.\n\nHellen continues to develop new techniques, with the latest being rolling paper over canvas and finishing with glitter. She is very pleased with the effect this had.",
    photoSrc: hellenPhoto
  },
  {
    id: 7,
    title: "Alan",
    summary: "Alan Hamilton has been with Renaissance for many years, reducing his support from 44 hours to just 12 hours per week while achieving remarkable success in Special Olympics competitions.",
    fullStory: "If anything goes wrong, all I do is give Renaissance a call.\n\nAlan Hamilton has been a Renaissance Group client for many years. With no family in the Auckland region, Alan, who has Asperger's Syndrome, has managed to work his way towards greater self-reliance by reducing the amount of support he receives through Renaissance from 44 hours a week, down to just 12.\n\nThis is a remarkable achievement for a man who clearly values his independence, and will stop at nothing to get it.\n\nOriginally Alan was living in a residential facility, however, with the help of the Renaissance team he was able to move into his own Housing New Zealand home within the community, where he has been living happily for the last eight years.\n\nWhen asked about the services Renaissance provides, Alan said, \"I get proper support and without them I cannot even fill out my own forms – for example any application forms from Housing New Zealand or WINZ. They've also given me a bit of assistance at the doctors. I would not be able to manage or cope if Renaissance was not in my life.\"\n\nAlan enjoys a busy lifestyle, with many hobbies and interests. He participates in athletics, basketball, Christian fellowship for the disabled, and he's also keen on painting and playing guitar at a weekly jam session. Alan competed in the tier 2 Special Olympics Athletics competition in November 2024 and achieved Gold in the Shot put, and the relay, Silver in the 200m and fourth place in the 400m.\n\nHis most recent activity is tending a community garden plot at the Manukau Garden Teaching Group, something he gets great pleasure from. Here Alan has learnt about the different vegetable varieties, how to grow and look after them, and the best of all, he gets to take his produce home to cook and eat, which he says is \"very nice\".\n\nAlan says \"if anything crops up or anything goes wrong and I find myself in a crisis, all I do is pick up the phone and give Renaissance a call\". He's also learnt that taking a deep breath and going for a nice long walk helps too.",
    photoSrc: alanPhoto
  },
  {
    id: 8,
    title: "James",
    summary: "James has been with Renaissance since 2016, transforming from a shy swimmer to a confident Global Messenger for Special Olympics who represented New Zealand in Abu Dhabi.",
    fullStory: "James has been with Renaissance since 2016. When he first began he did not anticipate that he was on a journey that would lead to Abu Dhabi.\n\nJames was a rather shy guy, not one for the limelight. He says having Supported Living in place helped him gain confidence in social situations. His experiences coupled along-side his friendly and sociable nature have helped him overcome his shyness, to a place where he is well positioned and equipped to reach out to others. While still not an attention seeker, the development in his confidence allows him to fulfil his public speaking opportunities and manage his responsibilities with style.\n\nJames started in the Special Olympics as a competitive swimmer, winning gold medals at National Championships. He went through training and became a Global Messenger for Special Olympics and now travels the country speaking to schools, sports clubs, and community organisations. His presentation is entertaining and informative. His sense of humour and well-spoken, helpful manner might make one think this had always been natural for him.\n\nWhen James started competing in Powerlifting. He trained hard, while still maintaining his job five days a week, and was selected to represent New Zealand at the 2019 World Summer Games in Abu Dhabi. He says, \"Waiting to see if I'd made it was very hard. I just spent the time training hard, to distract myself.\" James has so far won four silver medals at the Special Olympics and became the Ambassador for Special Olympics.\n\nJames says, \"I am very excited about representing my country.\"\n\nOutside of training and work James has found time to get his full licence and buy his first car, a Toyota Hybrid which he is really happy with.",
  },
  {
    id: 9,
    title: "Josh",
    summary: "Josh has made bold steps forward in his life, becoming a founding member and presenter of Radio Gaga while developing his confidence and budgeting skills.",
    fullStory: "Josh has made some bold steps forward in his life and his dreams. When we approached him about sharing his story, he saw it as an opportunity that he wanted to seize. Josh is growing personally as well as being very passionate about his new endeavours and the impact he wants to make on his community.\n\nHere is Josh's story from his perspective:\n\nI want to share with you a bit of the journey I've travelled and the path I am still on. Some steps are small. Some steps are big. Some steps are managing basic everyday things. Some steps are amazing. As I look back over my life these last few years with Renaissance support, I see myself growing, developing, and yes, sometimes struggling, but still consistently moving forward.\n\nOne everyday area of my life where I was really struggling was budgeting. I wasn't able to sort my bills and manage my shopping needs. Now I can do both of those things. Not only that, but finances were preventing me from pursuing a dream. Now I've found that I can do the things that are most important to me, once I decide what they are, make a plan, and stick to it.\n\nJosh was a founding member of Radio Gaga. As a presenter, he was able to give hope and encourage the disability community and their families. Josh says \"For me, being a part of Radio Gaga was one of the most amazing parts of my journey. I was shy before. I came out of it as I worked on helping others to overcome their own shyness and share their experiences. I'm a Radio Presenter now. I think that is so important and it makes me feel good to be a part of that\".\n\n\"My confidence was buried, but now it is up and out.\"\n\n\"I'm growing in my sense of \"community\" which is now reaching into the wider Auckland area rather than just my neighbourhood. I'm travelling to new areas by bus and train. I participated in Round the Bays as a way to challenge myself. My spirit is really lifted by experiencing new things and being engaged\".",
    photoSrc: joshuaPhoto
  },
  {
    id: 10,
    title: "John",
    summary: "John and Renaissance started working together in 2016, helping him pursue his astronomy passion while providing his sister Carla with much-needed relief from daily support tasks.",
    fullStory: "John and Renaissance started working together in 2016. John had friends and a job, lived in his own flat, and seemed pretty content with his life, so why put Supported Living services in place?\n\nTo answer that question we have to look at how John was achieving success in these areas, and what difference having Supported Living could make, for both John and his family.\n\nJohn receives great support from his sister, Carla, though, before having Supported Living services, managing all of his needs was sometimes challenging and stressful. She would get calls from the council most every month, because his lawns were overgrown. Carla says, \"John doesn't prioritise basic life needs like paying the power or cooking a meal. He wouldn't attend doctor's appointments, or any others, unless I took off work and went with him.\" This resulted in a huge commitment of time and energy for her just to ensure these needs were met.\n\nJohn acknowledges, \"I'm not always the best with organisation. I'm good sometimes and not others. Left on my own, things tend to slip here and there.\" At first John struggled to commit to his support time, but has since built up a great rapport with his SLF and wouldn't want to change that. Because his sister was doing such a good job supporting him, John struggled to identify the difference Supported Living services made in his life, however his sister had no such qualms. Carla says, \"The difference for me is huge. Having Renaissance is a Godsend. Now it's not me having to attend every appointment with him, because he won't go if I don't. I have more time to run my business and care for my kids.\"\n\nJohn has had a keen interest in astronomy since he was a child, and even though he would spend hours studying on his own, he never pursued it in any formal way. One day he and his Supported Living Facilitator went to the Astronomical Society for a lecture. John engaged in the lecture in such an informed way that the lecturer had him speak to the group about the new intervention to be included in the Mars 2020 Rover launch that will allow closer viewing of the stars. The result? John is now a member and sharing his passion and knowledge with others of similar interest and growing from their knowledge, and also from the social side of the experience.\n\nHis sister, Carla, is happy to see him get involved in a way that is outside of himself and a book or computer. She says, \"No matter how passionate he was, he would never have done this on his own.\"\n\nHaving Supported Living Services in place has allowed John to better manage his needs, pursue his passion and develop new social networks.\n\nHis sister acknowledges that the difference Supported Living services makes can be equally beneficial for the families, saying, \"I'm much less stressed, because I know, if I have concerns, I ring Renaissance and it's sorted.\"",
  },
  {
    id: 11,
    title: "Radio Gaga",
    summary: "Renaissance Group founded Radio Gaga in October 2016, a radio show 100% produced and presented by people with disabilities, breaking stereotypes and giving disabled voices a platform.",
    fullStory: "Mel Jones (producer) and Josh Hastings (presenter) have been the driving force among the team of Radio Gaga presenters since the inception of the show.\n\n'It's been a really good experience for me,' Hastings says.\n\nEvery presenter lives with a disability and this is the foundation that makes Radio Gaga supreme. Usually disabled people's voices are unheard on mainstream radio. Radio Gaga is breaking stereotypes and giving people with disabilities a self-directed environment to be heard.\n\n'I've got a lot of confidence out of it and I've learned a lot about different disabilities which has made me more understanding of all kinds of people,' Hastings said.\n\nRenaissance Group founded Radio Gaga in October 2016. The show is dedicated to raising awareness about disability. Show presenters encourage listeners to live a fulfilling life by sharing their experiences as disabled people by showcasing their hobbies, talents and abilities.\n\nHastings explains, 'I was scared when I started but now I'm honoured to be a part of making a difference for others. Disabled people are invited to join the radio show to find out for themselves what they can learn and get out of being on the radio'.\n\nRenaissance sponsors Radio Gaga, a programme that is 100 percent produced and presented by people with disabilities.\n\nRadio Gaga is aired every Wednesday at 1 pm on 104.6fm Auckland.",
    photoSrc: radioGagaPhoto
  },
  {
    id: 12,
    title: "Daryl",
    summary: "At 36, Daryl has fought against all odds with his health conditions to pursue his dream of competing in golf at the Special Olympics in Los Angeles 2015.",
    fullStory: "Against all odds.\n\nDaryl is man with a dream – A dream to get to the Special Olympics in Los Angeles in 2015. At the age of 36, Daryl has fought against all odds to be where he is in his sporting career. Although he has Thrombocytopenia, Leukopenia and along with a diagnosis of mild intellectual disability, Daryl upholds a bright and positive attitude towards life and proudly states \"I want to achieve more!\"\n\nDaryl enjoys many sports, but due to his physical health issues, his choices for sport have been limited. Luckily, there was one sport that caught Daryl's eye – Golf.\n\nYes, golf! This passion began 6 years ago, when his previous Supported Living Facilitator (SLF) – Grace – was looking for a sport Daryl could play. Daryl says \"I always wanted to be at a driving range and hit a golf ball.\" He says golf has helped him \"Get out in the sun and be outside more\". As Daryl's mum mentions \"No one in the family plays golf\", Daryl's natural talent and interest in the sport has driven him to be one of the best on the range and has led him on a pathway to represent New Zealand in golf at the Special Olympics in 2015.\n\nIn preparation to get to Los Angeles next year, Daryl says there are 3 main things that he needs to prepare for. These entail, getting his fitness up, as its going to be \"very hot\". He is currently attending the gym with his Support worker, in order to achieve this goal. He also needs to keep practicing- Daryl trains 3-4 times a month with a coach and also plays 9 holes on Sundays which takes 2-3 hours, along with Igolf practice which is once a week for an hour. Finally, Daryl also needs financial assistance in order to participate at this event as it costs approximately $8,500. Daryl has set up a page on Give a little (www.givealittle.co.nz) – an organisation that helps people fund raise.\n\nDaryl has a strong support system around. His family being his biggest support, along with motivation, they provide his golf equipment–courtesy of his brother, they assist him financially and his dad walks around the 9 holes with him most games. Keri, his SLF, also supports him at the golf range. With this great network of support, Daryl has attended multiple Ribbon days held 4-5 times a year, and won gold at his first National games in Dunedin in 2013. These are tremendous results and Daryl admits he is very proud of himself for his accomplishments.\n\nHe states \"If it wasn't for Grace, he would have not known about golf\", and says Renaissance Group \"helps me achieve things I want to achieve.\"\n\nBefore we left, Daryl gave us one piece of advice that he has learnt through his accomplishments \"Just go for it and have fun. Enjoy the journey!\"",
  },
  {
    id: 13,
    title: "Blake and Ryan",
    summary: "Brothers Blake and Ryan, both with Spinal Muscular Atrophy Type II, have designed and managed their own support services to live independently together in their own home.",
    fullStory: "Designed and managed their own services.\n\nMy brother Ryan and I have a genetic disorder called Spinal Muscular Atrophy Type II. The condition usually prevents living past the age of six, but my brother and I are now in our 30's. It was never expected that we would live to this age or that we would live relatively 'normal' lives. Instead we went to public schools, had social lives, I had a religious life for a time, we've been involved in our community, I've had a part-time job, and we both went to university. The only 'normal' thing left by this point was to go flatting.\n\nSo we did. At the beginning of the year, my brother decided to start looking into our options so that we could continue the 'normal' part of our lives. When looking through the funding options, it became very clear that the only way to receive the 24/7 care we required was if we were to live together and share some hours.\n\nSo we did. We began searching for houses that could accommodate our needs. This meant room for two wheelchairs, room for equipment such as a hoist and specialty beds, a single-floor design, a landlord who wouldn't mind small alterations, and space for a disability-van. After going through a number of houses with differing levels of required accommodations, a place in Albany was found that appeared to be almost exactly what we needed.\n\nWhile we were house-hunting, we also had to talk with the powers-that-be about the funding options that were available to us. After being referred to a number of organisations who might meet our needs – namely funding for 24/7 care – we decided to go with Renaissance. The main reason for this was the ability to mould the funding specifically to our needs.\n\nRather than telling us how much money we would pay for however many hours of care, we were given the flexibility of contracting our own independent carers. Renaissance has more of an assistant role than that of a director. If my brother or I have any queries in the way in which the funding is used or can be used, they aid us in that capacity.\n\nFurthermore, they are completely transparent with what happens with the funding. Whether it be the funding paid to our carers, the admin costs, or the amount of funding we have in reserve, we are completely in the know. We even have the option of looking at the finances over the internet.\n\nAfter living on our own since 2013, Ryan and I have no complaints. Our carers have been paid on time every fortnight, there is complete transparency in relation to our funding and requirements, and Renaissance have been completely accommodating. Ryan and I wanted to move out of home with minimal friction, so we did.",
    photoSrc: ryanBlakePhoto
  },
  {
    id: 14,
    title: "Rachel",
    summary: "28-year-old Rachel has transformed from being shy to becoming a confident Zumba instructor, building friendships and gaining energy through her passion for dance fitness.",
    fullStory: "My amazing journey……….so far.\n\nHi, my name is Rachel George and I am 28 years old. I have been with Renaissance for a couple of years now and my life has really changed in some amazing ways. When I started, some people would have described me as shy. A few of my main goals were to become active in my community, make friends and be healthier.\n\nWe started out walking to a community centre where I was involved in art classes and Zumba. I walked slowly and got tired easily. I enjoyed the art classes and am still involved in various projects from time to time, but it was the Zumba that really sparked my interest. Little did I know that Renaissance and I were starting on a path to some major changes in my life!\n\nI found that I really love Zumba. Even though I don't like 'exercising', I found this was more like being at a dance party. It is great fun. When I moved to a new community on of the first things I wanted to do was find another Zumba class. Now I am fit and healthy. I ho to Zumba two or three times a week and eat healthier. Even though I sometimes have trouble with reme4mbering other things, I can remember dozens of Zumba routines. I have been able to perform individually for community groups and preschools, and in other public group performances. Ready for the really big news? I'm an instructor now!\n\nI teach my own class as well as helping with some other classes. I recently finished a training course to be certified. I am very proud of myself.\n\nNot only am I fit and have more energy, I'm also much more confident. I have heaps of friends now. My dad is amazed how many people know me and talk to me when we go to the town centre. My friends aren't just from Zumba, but that is what increased my confidence to help me make friends other places as well.",
    photoSrc: rachelPhoto
  },
  {
    id: 15,
    title: "Michelle",
    summary: "Michelle has achieved remarkable milestones including getting her learner's licence despite living with mild intellectual disability and Dyspraxia, transforming her outlook from 'I can't' to 'I can'.",
    fullStory: "I always used to say I can't, but now I say I can.\n\nWhen asked what she has achieved over the last year Michelle Rahman replied, \"The list is endless! I've got my learners drivers licence and I'm well on my way to getting my restricted\". \"And these two are just the start of the list!\" her Supported Living Facilitator commented.\n\nSo what's so special about getting a drivers licence? The answer to this lies in the fact that Michelle lives with a mild intellectual disability as well as dealing with Dyspraxia on a daily basis. So what's the secret of her success and how has she achieved some of the goals that she has set for herself? Just over a year ago Michelle made the decision to join the Supported Living Programme offered by the Renaissance Group. Since then and working with the guidance and support of her Supported Living Facilitator, she has achieved goals she would never have dreamed of a year ago.\n\nPrior to receiving support from the Renaissance Team, Michelle spent a lot of time by herself, felt that she had very little independence and was very shy.\n\nAlong with her husband of two years, Michelle is now managing life with an attitude that even she finds hard to believe and as she said, \"I always used to say I can't but now I say I can!\" This is an attitude she is passing on to staff and pupils at Campbell's Bay Primary School where she works part time three to four days a week in their After Schools Programme. Going back to work in the school that she attended as a pupil is a huge success story for Michelle.\n\nThe team for the Renaissance Group do not work with clients to take over their lives, they are there simply to offer guidance and be supportive when meeting obstacles. For example, Michelle is also studying Pet Care part time via a correspondence course and as she says, \"When it gets difficult, I get together with my Supported Living Facilitator and we work our way through the issues\".\n\nNormal everyday tasks are also a part of Michelle's programme and they include jobs like budgeting, shopping and cooking, \"It's been good having my Supported Living Facilitator working with me as I used to burn food and cut my fingers\".\n\nEven with all these achievements in such a short time Michelle's final statement, \"I would like to do more though!\"",
  },
  {
    id: 16,
    title: "Todd",
    summary: "Todd Robertson is a very independent person living a busy lifestyle who can now enjoy his mum as a mother rather than a support person, while managing his epilepsy and pursuing various interests.",
    fullStory: "Now I enjoy my mum as a mum.\n\nTodd Robertson is a very independent person who lives such a busy lifestyle, it's hard to keep up with what he's doing at any one time! What a difference from his lifestyle of three years ago when he was heavily relying on mum. Now as Todd says, \"I can now enjoy her more as mum than a support person\". The answer to this amazing change is Todd has been receiving the support of the Supported Living Team from the Renaissance Group since 2006.\n\nTodd is an interesting person who is continually coming up with new plans and ideas that he wants to be involved with, so calls in his Supported Living Facilitator. They talk about the latest idea that Todd has, he then asks for any support he feels he might need and then goes ahead and does it! What a great attitude.\n\nDuring his first meetings with the Renaissance Supported Living Coordinator it was clear that Todd's first major goal was to live independently. With the help and guidance of his Supported Living Facilitator he moved and now lives independently in his one bedroom flat. How good is that? Holding down a job for over two years now has been a great boost to Todd's confidence and commitment. His employer has given him extra responsibilities and is happy to encourage and enhance his growth.\n\nThis is a person who has not allowed his mild intellectual disability combined with cerebral impairment and epilepsy to prevent him living a full life. As his Supported Living Facilitator says, \"At times I can't keep up with him he's so busy, going skiing at Snow Planet, checking out horse riding and lately taking up golf!\"\n\nRecognising the triggers that could bring on an attack of epilepsy has been another achievement. One of these triggers is the lights while driving at night, yes Todd also has his driving licence; the solution Todd has to this problem is that he only drives during the day. To date he has been free of seizures for five years.\n\nSince he has had the support of the Renaissance Group Todd is doing so much more with his life and is certainly confident enough to meet the challenges of daily life.",
    photoSrc: toddPhoto
  }
];

export default function SuccessStories() {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  const toggleStory = (storyId: number) => {
    setExpandedStory(expandedStory === storyId ? null : storyId);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center space-y-8 mb-16">
              <div className="inline-flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600 bg-white px-6 py-2 rounded-full border border-gray-200 uppercase tracking-wider">
                  Success Stories
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#111727] leading-tight max-w-4xl mx-auto">
                Real stories of independence and empowerment
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Discover how Renaissance has supported people to achieve their dreams, build connections, and live independently in their communities.
              </p>
            </div>
          </div>
        </section>


        {/* Stories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="space-y-12">
              {successStories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Photo Section */}
                    <div className="relative">
                      <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center overflow-hidden">
                        {story.photoSrc ? (
                          <img
                            src={story.photoSrc}
                            alt={story.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center text-gray-500">
                            <Camera className="w-12 h-12 mx-auto mb-4" />
                            <p className="text-sm">Photo coming soon</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <div className="space-y-6">
                        {/* Story Header */}
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {story.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            {story.summary}
                          </p>
                        </div>

                        {/* Expandable Full Story */}
                        <div>
                          <button
                            onClick={() => toggleStory(story.id)}
                            className="flex items-center gap-2 text-[#B75A5E] hover:text-[#a04e4e] font-medium mb-4 transition-colors"
                          >
                            {expandedStory === story.id ? (
                              <>
                                <span>Read Less</span>
                                <ChevronUp className="w-4 h-4" />
                              </>
                            ) : (
                              <>
                                <span>Read Full Story</span>
                                <ChevronDown className="w-4 h-4" />
                              </>
                            )}
                          </button>

                          {expandedStory === story.id && (
                            <div className="space-y-4 pt-4 border-t border-gray-200">
                              <p className="text-gray-600 leading-relaxed">
                                {story.fullStory}
                              </p>
                              <div className="flex items-center gap-2 text-sm text-gray-500 pt-4">
                                <Heart className="w-4 h-4 text-[#B75A5E]" />
                                <span>Renaissance Success Story</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <span className="inline-block px-6 py-2 bg-[#4098B8] text-white text-sm font-medium rounded-full mb-6">
              YOUR STORY
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Ready to write your success story?</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Every journey to independence is unique. Let us support you or your loved one to achieve your goals and dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#B75A5E] hover:bg-[#a04e4e] text-white px-8 py-6 text-base rounded-full transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#B75A5E] text-[#B75A5E] hover:bg-[#B75A5E] hover:text-white px-8 py-6 text-base rounded-full transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                Learn More About Our Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}